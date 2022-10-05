import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import CustomDialog from "../../components/CustomDialog";
import { Box } from "@mui/system";
import FormInputField from "../../components/FormInputField";
import { FormSelect } from "../../components/FormSelect";
import { CountryList } from "../../common/CountryList";
import { Button, FormHelperText, Grid } from "@mui/material";

interface SignInValues {
  countryCode: string;
  phoneNum: string;
  password: string;
}

interface SignInModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (values: Object) => void;
}

const SignInForm = (props: SignInModalProps & FormikProps<SignInValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    // handleBlur,
    handleSubmit,
    // isSubmitting,
    setFieldValue,
    modalOpen,
    setModalOpen,
    resetForm,
    onSubmit,
  } = props;

  useEffect(() => {
    if (modalOpen === false) resetForm();
  }, [modalOpen, resetForm]);

  return (
    <>
      <CustomDialog
        heading={"Sign In"}
        subString={"Login with your mobile and password"}
        modalOpen={modalOpen}
        // onSubmit={Formik.han}
        setModalOpen={setModalOpen}
      >
        <Box
          component="form"
          sx={{
            mt: 2,
          }}
          // noValidate
          // autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <FormSelect
              id={"countryCode"}
              value={values.countryCode}
              onChange={handleChange}
              disabled={false}
              error={Boolean(touched.countryCode && errors.countryCode)}
              itemList={CountryList}
              label="Code"
              sx={{ width: 8 }}
            />
            <FormInputField
              disabled={false}
              id={"phoneNum"}
              error={Boolean(touched.phoneNum && errors.phoneNum)}
              labelHeading={"Phone"}
              onChange={(e) => {
                const _value: string = e.target.value;
                const regex = /^\d+$/;
                if (regex.test(_value)) {
                  setFieldValue("phoneNum", _value);
                } else if (_value.length === 0) setFieldValue("phoneNum", "");
                // handleChange(e);
              }}
              inputType="text"
              value={values.phoneNum}
              inputProps={{ maxLength: 15 }}
            />
          </Box>
          {Boolean(touched.phoneNum && errors.phoneNum) ||
          Boolean(touched.countryCode && errors.countryCode) ? (
            <FormHelperText error sx={{ ml: 2, mb: 1 }} id={`error`}>
              {errors.phoneNum || errors.countryCode}
            </FormHelperText>
          ) : (
            <Box component="div" sx={{ height: 20 }}></Box>
          )}
          <FormInputField
            disabled={false}
            error={Boolean(touched.password && errors.password)}
            id={"password"}
            labelHeading={"Password"}
            onChange={handleChange}
            value={values.password}
            helperText={
              Boolean(touched.password && errors.password)
                ? errors.password
                : ""
            }
            inputType="password"
          />
          <Grid
            component="div"
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ height: 60, width: "100%", mt: 0 }}
          >
            <Grid item xs="auto">
              <Button
                color="primary"
                variant="outlined"
                sx={{ textTransform: "none" }}
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                color="primary"
                variant="contained"
                sx={{ textTransform: "none" }}
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CustomDialog>
    </>
  );
};

interface SignInInitValues extends SignInModalProps {
  initCountryCode?: string;
  initPhoneNum?: string;
  initPassword?: string;
}

const SignInModal = withFormik<SignInInitValues, SignInValues>({
  mapPropsToValues: (props) => ({
    countryCode: props.initCountryCode || "",
    phoneNum: props.initPhoneNum || "",
    password: props.initPassword || "",
  }),

  validationSchema: Yup.object().shape({
    countryCode: Yup.string().required("Select country code"),
    phoneNum: Yup.string().required("Enter phone number"),
    password: Yup.string()
      .required("Password is required")
      .test(
        `white-space-validation`,
        "White space not allowed",
        function (value) {
          const passString = value || "";
          if (/\s/.test(passString)) return false;
          return true;
        }
      )
      .min(8, "Password too small")
      .max(20, "Password too big")
      .test(
        `capital-letter-validation`,
        "Atleast one capital character required",
        function (value) {
          const passString = value || "";
          if (/[A-Z]/.test(passString)) return true;
          return false;
        }
      )
      .test(
        `small-letter-validation`,
        "Atleast one capital character required",
        function (value) {
          const passString = value || "";
          if (/[a-z]/.test(passString)) return true;
          return false;
        }
      )
      .test(
        `special-character-validation`,
        "Atleast one special character required",
        function (value) {
          const passString = value || "";
          if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(passString))
            return true;
          return false;
        }
      ),
  }),
  handleSubmit: (values) => {
    const { countryCode, phoneNum, password } = values;
    console.log(`${countryCode} ${phoneNum} ${password}`);
  },
})(SignInForm);

export default SignInModal;
