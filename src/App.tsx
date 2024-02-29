import './App.css'
import { useForm } from 'react-hook-form'
import { schema } from './Schema';
import { yupResolver } from '@hookform/resolvers/yup';

function App() {

  type SubmitType = {
    firstName: String,
    lastName: String,
    email: String,
    password: String
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
  }


  const { register, handleSubmit, formState: { errors } } = useForm<SubmitType>({
    resolver: yupResolver(schema)
  });

  return (
    <>
      <div className="container">
        <div className="top">
          <h1>Learn to code by watching others</h1>
          <p className='see'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </div>
        <div className="bottom">
          <div className="rame">
            <div className="h1">Try it free 7 days <span className='then'>then $20/mo. thereafter</span></div>
          </div>
          <div className="reg">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
                style={{
                        borderColor: errors?.firstName?.message && 'red',
                        backgroundImage: errors?.firstName?.message && 'url(/error.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '95% center'
                      }}
                        type={'text'}
                        placeholder="First Name"
                        {...register("firstName")}
                />
                {errors.firstName && <p className='error'>{errors.firstName?.message}</p>}
                <input
                    style={{
                        borderColor: errors?.lastName?.message && 'red',
                        backgroundImage: errors?.lastName?.message && 'url(/error.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '95% center'
                    }}
                    type={'text'}
                    placeholder="Last Name"
                    {...register('lastName')}
                />
                {errors.lastName && <p className='error'>{errors.lastName?.message}</p>}
                <input
                    style={{
                        borderColor: errors?.email?.message && 'red' ,
                        backgroundImage: errors?.email?.message && 'url(/error.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '95% center'
                    }}
                    type="email"
                    placeholder='Email'
                    {...register('email')}
                />
                {errors.email && <p className='error'>{errors.email?.message}</p>}
                <input
                    id='rame'
                    style={{
                        borderColor: errors?.password?.message && 'red',
                        backgroundImage: errors?.password?.message && 'url(/error.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '95% center'
                    }}
                    type="password"
                    placeholder='Password'
                    {...register('password')}
                />
                {errors.password && <p className='error'>{errors.lastName?.message}</p>}
                <button onClick={onSubmit}>CLAIM YOUR FREE TRIAL</button>
                <p className='last'>By clicking the button, you are agreeing to our <span className='terms'>Terms and Services</span></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
