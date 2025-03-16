"use client";

import { useState } from "react";

// import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="card sm:max-w-sm flex items-center align-middle gap-6 p-8">
      <figure>
        <img
          src="https://cdn.flyonui.com/fy-assets/components/card/image-9.png"
          alt="Watch"
        />
      </figure>

      <div className="flex flex-col gap-6">
        <div className="relative w-72">
          <input
            type="text"
            placeholder="John Doe"
            className="input input-floating peer"
            id="floatingInput"
          />
          <label className="input-floating-label" htmlFor="floatingInput">
            Full name
          </label>
        </div>
        <div className="input-group max-w-sm">
          <div className="relative w-full">
            <input
              id="toggle-password-floating"
              // type="password"
              type={showPassword ? "text" : "password"}
              className="input input-floating peer"
              placeholder="Enter password"
              // value="Pwd_1242@mA1"
            />
            <label
              className="input-floating-label"
              htmlFor="toggle-password-floating"
            >
              Password
            </label>
          </div>
          <span className="input-group-text">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="block"
              aria-label="password toggle"
            >
              {showPassword ? (
                <span className="icon-[tabler--eye] text-base-content/80 block  size-5 flex-shrink-0"></span>
              ) : (
                <span className="icon-[tabler--eye-off] text-base-content/80 block size-5 flex-shrink-0"></span>
              )}
            </button>
          </span>
        </div>

        <button className="btn w-72">Log In</button>
      </div>
    </div>
  );
}
