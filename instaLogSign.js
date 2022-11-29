const container = document.querySelector('.container');
const LOrSBtn = document.querySelector('.loginOrSignup')
let loginBoolean = false
const displayFunction = () => {
    loginBoolean ? LOrSBtn.innerHTML = `Don't have account?<span style="color:darkblue;">Sign Up</span>` : LOrSBtn.innerHTML = `<p style="margin-top:18vh; margin-left:3vw;">Have an account?<span style="color:darkblue;">Log in</span></p>`
    //true -> then-->else

    loginBoolean ? container.innerHTML += `<div id="login">
<h1>𝐼𝓃𝓈𝓉𝒶𝑔𝓇𝒶𝓂</h1>
<input type="email" placeholder="Phone number,username,email">
<input type="password" placeholder="password">
<button class="BTN">Login</button>
<div id="HR">
<hr>OR<hr>
</div>
<div id="facebook">
<img id="facebook1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsprSO1LA2iy0gXuRA_03ut1U_FlRW8Vung&usqp=CAU" alt="">
<h4>Login with a Facebook</h4>
</div>
<h6>Forgate Password?</h6>
<p>Get the app</p>
<div id="img">
<img src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" alt="">
<img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="">
</div>

</div>`: container.innerHTML += ` <div id="login">
<h1>𝐼𝓃𝓈𝓉𝒶𝑔𝓇𝒶𝓂</h1>
<p id="head">Sign up see photos and videos from your friends.</p>
<div id="facebook">
<img id="facebook2"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsprSO1LA2iy0gXuRA_03ut1U_FlRW8Vung&usqp=CAU" alt="">
<h5>Login with a Facebook</h5>
</div>
<div id="Hr">
<hr>OR<hr>
</div>
<input type="email" placeholder="Mobile Number or Email">
<input type="text" placeholder="Full Name">
<input type="text" placeholder="Username">
<input type="password" placeholder="password">
<button class="BTN">Signup</button>
</div>
<p id="app">Get the app</p>
<div id="IMG">
<img src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" alt="">
<img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="">
</div>`
}
displayFunction()
LOrSBtn.addEventListener('click', () => {
    loginBoolean = !loginBoolean
    container.innerHTML=''
    displayFunction()
})