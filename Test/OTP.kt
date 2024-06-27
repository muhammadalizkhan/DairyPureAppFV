class OTPService {
    fun verifyOTP(email: String, otp: String): OTPResult {
        // Simulate OTP verification logic
        if (isValidOTP(email, otp)) {
            return OTPResult.Success("OTP verified successfully")
        } else {
            return OTPResult.Failure("Invalid OTP")
        }
    }

    private fun isValidOTP(email: String, otp: String): Boolean {
        // Validate OTP against database or service
        // Replace with actual OTP validation logic
        val storedOTP = "123456" // Simulated stored OTP
        return otp == storedOTP
    }
}

sealed class OTPResult {
    data class Success(val message: String) : OTPResult()
    data class Failure(val error: String) : OTPResult()
}
