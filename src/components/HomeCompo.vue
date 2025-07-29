<template>
  <div >
     <div id="fir-div">
    <header>
        <div>
        <h1>Welcome!!</h1>
        </div>
        <router-link to="/ProfilePage" class="profile-link">
      <img src="../assets/Avatar.svg" alt="Avatar">
    </router-link>
        
        
    </header>
    <div id="J-i">
        <h2>Let's start</h2>
        <button>Join</button>
    </div>
    </div>
    <main>
        <section id="section-1">
        <h2 style="font-weight: lighter;">Compete and Learn</h2>
        <p>
            Quizaki is your ultimate platform for immersive quizzes and competitive events designed exclusively for
            students. Dive into a world of knowledge where every quiz sharpens your skills and every competition fuels
            your ambition. From general trivia to advanced technical topics. 
        </p>
        </section>
        <section id="section-2">
            <h2 style="color: rgba(255, 179, 192, 1);">"Challenge Your Mind"</h2>
            <p>Take on fun and thought-provoking quizzes designed to test your knowledge and skills.</p>
        </section>
        <section id="section-3">
            <div>
                <h3>COMPETE</h3>
                <img src="../assets/Compete.jpg" alt="Compete">
            </div>
            <div>
                <h3>LEARN</h3>
                <img src="../assets/LEARN.jpg" alt="Learn">
            </div>
            <div>
                <h3>EXPLORE</h3>
                <img src="../assets/explore.jpg" alt="explore">
            </div>
        </section>
        <section id="section-4">
            <div class="reviews">
                <div class="rating">
                    <span class="star" data-value="5">&#9733;</span>
                    <span class="star" data-value="4">&#9733;</span>
                    <span class="star" data-value="3">&#9733;</span>
                    <span class="star" data-value="2">&#9733;</span>
                    <span class="star" data-value="1">&#9733;</span>
                </div>
                <h4>Sarah M.</h4>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear
                    to
                    elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
            <div class="reviews">
                <div class="rating">
                    <span class="star" data-value="5">&#9733;</span>
                    <span class="star" data-value="4">&#9733;</span>
                    <span class="star" data-value="3">&#9733;</span>
                    <span class="star" data-value="2">&#9733;</span>
                    <span class="star" data-value="1">&#9733;</span>
                </div>
                <h4>Sarah M.</h4>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear
                    to
                    elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
            <div class="reviews">
                <div class="rating">
                    <span class="star" data-value="5">&#9733;</span>
                    <span class="star" data-value="4">&#9733;</span>
                    <span class="star" data-value="3">&#9733;</span>
                    <span class="star" data-value="2">&#9733;</span>
                    <span class="star" data-value="1">&#9733;</span>
                </div>
                <h4>Sarah M.</h4>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear
                    to
                    elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
        </section>
    </main>
    <footer>
        <h1>Quiz</h1>
        <div>
            <h4>CONTACT US</h4>
            <p>(672)385-1684</p>
            <p>noaccount@gmail.com</p>
        </div>
        <div>
            <h4>FOLLOW US</h4>
        <i class="fa-brands fa-instagram fa-xl" style="color: #ffffff;"></i>          
        <i class="fa-brands fa-facebook-f fa-xl" style="color: #ffffff;"></i>
        <i class="fa-brands fa-tiktok fa-xl" style="color: #ffffff;"></i>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
    name:'HomeCompo'

}
</script>

<style>
:root {
    --text-size-h2: 34px;
}

body {
    background-color: rgb(73, 3, 81);
    font-family: 'Inter', sans-serif;
    margin: 0;
      text-align: center;

}

main {
    border-radius: 34px;
    padding: 5px;
    padding: 30px 20px;
    color: rgba(218, 218, 218, 1);
    display: flex;
    gap: 30px;
    flex-direction: column;
}

h2 {
    font-size: 34px;
}

#J-i {
    background-color: rgba(255, 204, 213, 1);
    border-radius: 20px;
    width: 70%;
    margin: auto;
    padding: 10px;
    border: solid black;
}

#J-i h2 {
    color: rgb(79, 77, 77);
    font-size: 26px;

}

#J-i button {
    font-size: 15px;
    background-color: rgba(133, 141, 113, 1);
    border-radius: 10px;
    border: solid 2px;
    padding: 7px 15px;
}

/* header styles */

header {
    display: flex;
    justify-content: space-between;
    padding: 30px 30px;
}

header h1 {
    font-size: 30px;
    color: white;
    margin-top: 17px;
}

/* section 1 styles */

#section-1 p {
    text-align: center;
    width: 80%;
    margin: auto;
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 36px;
    padding: 30px;
}

/* section 2 styles */

#section-2 {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.16);
    border-radius: 78px;
    padding: 20%;
}

#section-2 p {
    font-size: 14px;
}

#section-2 h2 {
    font-size: 22px;
}

/* section 3 styles */

#section-3 {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

#section-3 div {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 18px;
}

#section-3 img {
    width: 320px;
    border-radius: 7px;

}

#section-3 h3 {
    font-size: 22px;
}

/* section 4 styles */

.reviews {
    min-width: 300px;
    padding: 24px;
    border: solid rgba(255, 255, 255, 0.682);
    border-radius: 20px;
    margin-top: 25px;
}

.reviews h4 {
    margin: 7px 0px;
    font-size: var(--div-h4-sizes);
}

.reviews p {
    font-size: var(--p-size);
    line-height: 20px;
}

/* Footer styles */

footer {
    color: rgba(133, 141, 113, 1);
    background-color: rgb(82, 33, 88);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
i{
    margin-right: 15px;
    margin-top: 20px;
}

/* Desktop Styles */

@media (min-width: 1024px) {
    h2,h3{
        margin-bottom: 20px;
    }
    main {
        padding: 30px 80px;
        gap: 70px;
    }
    
    header{
        justify-content: space-between;
        background-color: rgb(82, 33, 88);
        padding: 20px 40px;
        border-radius: 10px;
        margin-bottom: 45px;
      }
    header h1 {
        font-size: 35px;
    }
    header p {
        font-size: 30px;
    }
    #J-i{
        padding: 30px;
        width: 30%;
    }
    #section-1 p{
        font-size: 24px;
    }
    #section-2 {
        padding: 10%;
        width: 80%;
        margin: auto;
        
    }
    #section-2 h2{
        font-size: 50px;
    }

    #section-2 p {
        font-size: 20px;
        line-height: 140%;
    }
    #section-3{
        justify-content: space-between;
        flex-direction: row;
    }
    #section-4{
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
    footer{
        flex-direction: row;
        gap: 150px;
        padding: 40px;
        margin-top: 70px;
        
    }

}

</style>