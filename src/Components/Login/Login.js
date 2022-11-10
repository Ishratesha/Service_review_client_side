import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const Login = () => {
  const{login,signInWithGoogle}=useContext(AuthContext)
    const handelLogin = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

 login(email,password)
 .then(result =>{
 const user = result.user
  console.log(user)
 })
        .catch(err=>console.log(err))
}
const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then( result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.error(error));
  }
    return (
       
      <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
              {/* <img className='w-3/4' src={img} alt="" /> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
              <h1 className="text-5xl text-center font-bold">Login</h1>
              <form onSubmit={handelLogin} className="card-body">
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Email</span>
                      </label>
                      <input type="text" name='email' placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Password</span>
                      </label>
                      <input type="password" name='password' placeholder="password" className="input input-bordered" />
                      <label className="label">
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                  </div>
                  <div className="form-control mt-6">
                      <input className="btn bg-amber-500" type="submit" value="Login" />
                  </div>
              </form>
              or 
              <button onClick={handleGoogleSignIn} className="btn bg-amber-500 text-black-500">Google</button>
              <br />
              
              <p className='text-center'>New to Zahan's Kitchen <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
          </div>
      </div>
  </div>
    );
};

export default Login;