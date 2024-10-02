import {
  AccountAlreadyExistsError,
  FetchParams,
  InternalServerError,
  InvalidCredentials,
  InvalidOTP,
} from "./types";

export const fetcher = async (params: FetchParams) => {
  const baseUrl = "https://airhubappjapanapi.airhubapp.jp/api";
  switch (params.type) {
    case "register": {
      const res = await fetch(
        `${baseUrl}/AccountUser/CustomerRegister/CustomerRegister`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: params.payload.email,
            firstName: params.payload.firstName,
            lastName: params.payload.lastName,
            passwordHash: params.payload.password,
            mobileNumber: params.payload.mobileNo ?? "",
          }),
        }
      );
      if (!res.ok) throw new InternalServerError();

      const data = await res.json();
      console.log(data);
      if (
        data.Message &&
        data.Message == "Email ID already exists." &&
        data.Data == null
      ) {
        throw new AccountAlreadyExistsError();
      }
      if (data.Data && data.Data == true && data.Message) {
        return true;
      }
      break;
    }
    case "login": {
      const res = await fetch(`${baseUrl}/Account/Login/Login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserName: params.payload.email,
          Password: params.payload.password,
        }),
      });
      if (!res.ok) throw new InternalServerError();
      const data = await res.json();
      console.log(data);
      if (data.IsSuccess == false && data.Token == null && data.data == null)
        throw new InvalidCredentials();
      return data as Record<string, any>;
    }
    case "2FA": {
      const res = await fetch(
        `${baseUrl}/AccountUser/ValidateOTPRegister/ValidateOTPRegister?OTP=${params.payload.otp}`
      );
      if (!res.ok) throw new InternalServerError();
      const data = await res.json();
      console.log(data);
      if (
        !data.IsSuccess ||
        !data.Token ||
        typeof data.Token !== "string" ||
        !data.data.UserID ||
        typeof data.data.UserID !== "string"
      )
        throw new InvalidOTP();
      return data as Record<string, any>;
    }
  }
  throw new Error("invalid fetch type");
};
