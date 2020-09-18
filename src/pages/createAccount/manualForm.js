{/* <form onSubmit={handleSubmit(onSubmit)} className ="input-form">
                            <Row>
                                <Col lg ={6} xs ={6}>
                                <input 
                                    className ="fname lname"
                                    type="text" 
                                    placeholder="First Name" 
                                    name="FirstName" 
                                    ref={register({required: true, maxLength: 80})}
                                    
                                />
                                {errors.FirstName && <p>Name is required </p>}
                                
                                
                                </Col>
                                <Col lg ={6} xs ={6}>
                                <input className ="fname lname" 
                                    type="text" 
                                    placeholder="Last Name" 
                                    name="Last name" 
                                    
                                    ref={register({required: true, maxLength: 100})} />
                                </Col>
                            </Row>
                            
                            <input 
                                className ="email" 
                                type="text" 
                                placeholder="Email" 
                                name="Email" 
                                ref={register({required: true, pattern: /^\S+@\S+$/i})} 
                            />

                            <br/>

                            <input 
                                className ="fname phone" 
                                type="tel" 
                                placeholder="Mobile Number" 
                                name="Mobile number"
                                ref={register({required: true, minLength: 6, maxLength: 12})}
                             ></input>

                             <br/>



                            
                            <Row>
                                <Col lg ={12} xs ={6}>
                                    <input className ="fname"
                                    id ="password-feild"
                                    type={passwordShown ? "text" : "password"} 
                                    placeholder="Password" 
                                    name="Password" 
                                    ref={register({max: 20, min: 8})}
                                    value ={password}
                                    autoComplete = "off"
                                    onFocus = {()=>{setPasswordFocused(true)}}
                                    onChange ={e=>onChangePassword(e.target.value)}
                                    /> <span onClick ={togglePasswordVisiblity}> {icon}</span><br/>
                                    {passwordFocused && <PasswordStrengthIndiactor validity ={passwordValidity}/>}
                                    </Col>

                                    <Col  lg ={12} xs={6}>
                                    <input className ="fname" 
                                    id =" password-feild"
                                    type={confrimpasswordShown ? "text" : "password"} 
                                    placeholder="Confirm Password"  
                                    
                                    name="ConfirmPassword" 
                                    ref={register({max: 20, min: 8})} 
                                    />
                                    <span onClick ={toggleConfirmPasswordVisiblity}> {cicon}</span>
                                </Col>
                             </Row> 
                             


                        </form> */}