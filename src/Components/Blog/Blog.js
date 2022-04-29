import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
            <div className='ms-5 me-5'>
                <h1 className='text-primary'>Difference between Node and Javascript. </h1>
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Difference</th>
                            <th scope="col">JavaScript</th>
                            <th scope="col">Node</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><p>
                                JavaScript is programming language tha is used by the developer to build a website responsive.
                            </p></td>
                            <td>Node JS is a javaScript runtime environment. </td>

                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Java Script is basically used on the client side</td>
                            <td>We can use the JavaScript outside of the browser by the help of nodeJS</td>

                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>JavaScript can run on the any browser. </td>
                            <td>Inside of node js V8 is the javascript engine that parses and runs javascript. </td>

                        </tr>
                    </tbody>
                </table>
            </div>



            <div className='ms-5 me-5 mt-5'>
            <h1 className='text-primary'>When to use Node and when to use MongoDB</h1>
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col"></th>

                            <th scope="col">When to Use NodeJs</th>

                            <th scope="col">When to Use MongoDB</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Node js is used for making traditional website and is used for back end API service. There are quite a lot of cases where the use of Node.js will add to our application performance and reliability. We can make our application more useful and valuable to other.  </td>
                            <td>When our data have to be saved parmanently and when we will need to use that in any purposes like user getting some information, storing some products to use it letter. Using MongoDB can be a good choose when our data is document-centric and doesn't fit well into the schema of a relational database. </td>        
                        </tr>
                    </tbody>
                </table>
            </div>



            <div className='ms-5 me-5 mt-5'>
            <h1 className='text-primary'>Difference between SQL and NoSQL </h1>
            <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Difference</th>
                            <th scope="col">SQL</th>
                            <th scope="col">NoSQL</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><p>
                            These databases can be or static or predefined schema
                            </p></td>
                            <td>These database have dynamic schema. </td>

                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>This database is not much suited for the hierarchical data storage</td>
                            <td>These database are best suited fo heirarchical data storage.</td>

                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>These are Vertically Scalable.</td>
                            <td>These are Horizontally scalable. </td>

                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='mt-5 ms-5 me-5'>
            <h1 className='text-primary'>The purpose of using JWT and how does it works </h1>
            <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">The purpose Of useing JWT  </th>

                            <th scope="col">Now let's talk how does it work?</th>     
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Actually JTW is a another way of verification or authentication. If we want to do something like seeing a video or anything else. Then the owner of the website verify it's the right person want to do that action. After that the system let us do whatever we want to. </td>


                            <td>First of all the developer or the owner of the website in where we are creates a Token called JWT token. Shortly it can be call jot.  This to behiend the token an email is definitelly there. Then the user email and the behiend email got matched. If that matched successfully users, we are allowed to do whatever we want to. </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blog;