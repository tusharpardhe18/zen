import React from "react";

const SignUp = () => {
  return (
    <form className="min-h-[80vh] flem items-center" onSubmit={onSubmitHandler}>
      <div>
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Sign In"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "sign in"} to start
          shoppingggg!!!
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              type="text"
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              onChange={(e) => ssrExportNameKey(e.target.value)}
              value={name}
              required
            />
          </div>
        )}
        <div className="w-full">
          <p>Email</p>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
