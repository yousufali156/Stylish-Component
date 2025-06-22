import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <Helmet>
        <title>Register || CourseHub</title> 
      </Helmet>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 w-full max-w-6xl">
        {/* Lottie Animation */}
        <div className="w-full max-w-md lg:max-w-lg">
          <Lottie animationData={RegisterLottie} loop />
        </div>

        {/* Register Form */}
        <div className="card w-full max-w-sm bg-base-300/90 shadow-xl backdrop-blur-md rounded-xl">
          <div className="card-body p-5">
            <h1 className="text-4xl font-extrabold text-blue-500 mb-6 text-center">
              Create Account
            </h1>

            <form onSubmit={handleRegister} className="space-y-2">
              <div>
                <label className="label text-blue-400 mb-2 font-medium">Name</label>
                <input name="name" type="text" className="input input-bordered w-full" required />
              </div>

              <div>
                <label className="label text-blue-400 mb-2 font-medium">Photo URL</label>
                <input name="photoURL" type="text" className="input input-bordered w-full" required />
              </div>

              <div>
                <label className="label text-blue-400 mb-2 font-medium">Email</label>
                <input name="email" type="email" className="input input-bordered w-full" required />
              </div>

              <div>
                <label className="label text-blue-400 mb-2 font-medium">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    className="input input-bordered w-full pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 -translate-y-1/2"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div>
                <label className="label text-blue-400 mb-2 font-medium">Confirm Password</label>
                <div className="relative">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="input input-bordered w-full pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 -translate-y-1/2"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

              <button
                type="submit"
                className="w-full py-2 mt-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition duration-300"
              >
                Register
              </button>
            </form>

            <div className="divider text-blue-400 font-medium">OR</div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleSocialLogin('google')}
                className="btn btn-outline w-full flex items-center gap-2 bg-blue-500 hover:text-base-300 transition"
              >
                <FaGoogle className="text-lg" /> Continue with Google
              </button>

              <button
                onClick={() => handleSocialLogin('github')}
                className="btn btn-outline w-full flex items-center gap-2 hover:text-red-600 transition"
              >
                <FaGithub className="text-lg" /> Continue with GitHub
              </button>
            </div>

            <div className="mt-2 text-center">
              <p className="text-sm text-blue-400">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="ml-1 inline-block text-purple-500 font-semibold hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;