import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/bruce-profile.png"
          width={500}
          height={500}
          alt="image showing bruce"
        />
      </div>

      <h1>Hi, I'm Bruce</h1>
      <p>
        I blog about web development - especially frontend framework like
        Angular and React
      </p>
    </section>
  );
}

export default Hero;
