import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useAddToCart, useToggleModalState } from "../store/store";
import toast from "react-hot-toast";

const PayModal = ({ total }) => {
  const valueToggle = useToggleModalState((state) => state.valueToggle);
  const emptyCartList = useAddToCart((state) => state.emptyCartList);
  const toggleModalState = useToggleModalState(
    (state) => state.toggleModalState
  );
  const handleValidation = Yup.object({
    moneyAmount: Yup.number()
      .typeError("Please enter a valid number")
      .required("Money amount is required")
      .positive("Amount must be positive")
      .min(total, "Please enter enough money"),
  });
  const handleSubmit = (values) => {
    +values.moneyAmount;
    if (+values.moneyAmount >= total) {
      toggleModalState();
      emptyCartList();
      toast(`Your remain is :  ${+values.moneyAmount - total}`, {
        icon: "💸",
      });
      toast.success("The invoice has been paid successfully");
    }
  };
  return (
    <>
      {valueToggle && (
        <div
          onClick={toggleModalState}
          className="w-full z-[300] h-dvh bg-black/60 fixed top-0 left-0 flex justify-center items-center"
        >
          <div className="container flex justify-center items-center">
            <div
              onClick={(e) => e.stopPropagation()}
              className="rounded-3xl bg-white w-[90%] lg:w-[40%] p-4"
            >
              <Formik
                onSubmit={handleSubmit}
                validationSchema={handleValidation}
                initialValues={{ moneyAmount: "" }}
              >
                <Form className="flex flex-col gap-6">
                  <h1 className="text-gray-900 text-center text-2xl font-bold ">
                    Pay Here Please
                  </h1>
                  <p className="text-gray-900 font-bold ">
                    Please pay : {total}
                  </p>
                  <Field
                    type="text"
                    name="moneyAmount"
                    className="input border border-gray-500 w-full text-[22px] bg-white text-gray-900"
                    placeholder="$100"
                  />
                  <ErrorMessage
                    name="moneyAmount"
                    component="p"
                    className="text-red-500"
                  />
                  <button
                    type="submit"
                    className="btn btn-neutral w-full text-[22px]"
                  >
                    Pay
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PayModal;
