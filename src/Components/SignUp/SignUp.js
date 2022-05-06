import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import Loadding from './../Loadding';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const [sendEmailVerification, sending, sendingEmailVerificatonError] = useSendEmailVerification(auth);

    const handleOnSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
            await sendEmailVerification(); 
            toast('Click twice on the sign up button to get email verification.'); 

        }

        const {data} = await axios.post('http://localhost:5000/signInToken', {email}); 
        console.log(data); 
        localStorage.setItem('accessToken', data.accessToken); 

    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle();
        
    }

    const handleSignInWithGithub = () => {
        signInWithGithub(); 
    }


        useEffect(()=>{
           if(googleUser){
               const verifyGmailWithJWT = async (email) =>{
                const {data} = await axios.post('http://localhost:5000/signInToken', {email}); 
                console.log(googleUser?.user?.email); 
                localStorage.setItem('accessToken', data?.accessToken);
                console.log(data); 

               }
               verifyGmailWithJWT(googleUser?.user?.email)
           }
        },[googleUser])

        console.log(githubUser?.user.providerData[0]?.email); 

        useEffect(()=>{
            if(githubUser){
                const verifyGmailWithJWT = async (email) =>{
                    
                 const {data} = await axios.post('http://localhost:5000/signInToken', {email}); 
                 console.log(email); 
                 localStorage.setItem('accessToken', data?.accessToken);
                 console.log(data); 
                 console.log('connected to github'); 
 
                }
                verifyGmailWithJWT(githubUser?.user?.providerData[0]?.email)
            }
         },[githubUser])


    return (
        <div className='mt-4 row forheight'>
            <div className='d-block mx-auto col-md-8 col-sm-8 col-lg-6 border border-primary p-3 rounded w-75'>
                <h1 className='text-primary'>Sign up</h1>
                <form onSubmit={handleOnSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" name='password' id="exampleInputPassword1" required />

                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" name='confirmPassword' id="exampleInputPassword1" required />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <p className='me-2'>Already have an account?</p>
                        <Link to='/login'>Log in</Link>
                    </div>

                    <div>
                        {
                            loading && <Loadding></Loadding>
                        }
                    </div>

                    <div>
                        {
                            googleLoading && <Loadding></Loadding>
                        }
                    </div>

                    <div>
                        {
                            githubLoading && <Loadding></Loadding>
                        }
                    </div>



                    <div>
                        <div>
                            {
                                error && <p className='text-danger d-flex justify-content-center'>{error?.message}</p>
                            }
                        </div>

                        <div>
                            {
                                googleError && <p className='text-danger d-flex justify-content-center'>{googleError?.message}</p>
                            }
                        </div>

                        <div>
                        {
                            githubError && <p className='text-danger d-flex justify-content-center'>{githubError?.message}</p>
                        }
                    </div>

                    
                    </div>

                    <button className="btn btn-outline-primary w-50
        d-block mx-auto" type="submit">Sign up</button>

                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='line w-50'></div>
                        <p>or</p>
                        <div className='line w-50'></div>
                    </div>

                </form>

                <button onClick={handleSignInWithGoogle} className="btn btn-outline-primary w-50
            d-block mx-auto mb-3" type="submit">Sign in with Google</button>

                <button onClick={handleSignInWithGithub} className="btn btn-outline-primary w-50
            d-block mx-auto mb-3" type="submit">Sign in with Github</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;