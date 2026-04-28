export interface LoginFormInput {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegisterFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
  profilePicture?: File | null;
}

export interface ForgotPasswordFormInput {
  email: string;
}

export interface ResetPasswordFormInput {
  password: string;
  confirmPassword: string;
}
