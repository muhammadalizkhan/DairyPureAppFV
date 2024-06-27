class SignupService {
    fun registerUser(email: String, password: String): SignupResult {
        // Simulate user registration logic
        if (isEmailAvailable(email)) {
            val newUser = createUser(email, password)
            return SignupResult.Success(newUser)
        } else {
            return SignupResult.Failure("Email already in use")
        }
    }

    private fun isEmailAvailable(email: String): Boolean {
        // Check against database or user repository
        // Replace with actual email availability check
        val existingEmail = "testuser@example.com"
        return email != existingEmail
    }

    private fun createUser(email: String,
