class ForgetPassService {
    fun sendResetLink(email: String): ForgetPassResult {
        // Simulate sending reset link logic
        if (isValidEmailFormat(email)) {
            return ForgetPassResult.Success("Reset link sent to $email")
        } else {
            return ForgetPassResult.Failure("Invalid email format")
        }
    }

    private fun isValidEmailFormat(email: String): Boolean {
        // Validate email format
        return email.matches(Regex("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"))
    }
}

sealed class ForgetPassResult {
    data class Success(val message: String) : ForgetPassResult()
    data class Failure(val error: String) : ForgetPassResult()
}
