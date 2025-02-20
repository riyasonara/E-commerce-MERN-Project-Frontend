import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            magni iusto modi impedit, dignissimos, est incidunt, vitae sequi
            quia minus minima architecto ut in molestiae quaerat illum possimus
            atque deleniti aspernatur facere non tempore earum ab officia.
            Officia deserunt quod assumenda reiciendis fugit, suscipit veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eaque enim vel, tenetur minus dolore odit quos vitae
            perspiciatis magni modi, sit molestias! Distinctio, maiores tempore.
            Praesentium, libero ipsum asperiores excepturi eius molestias
            molestiae ad quos minima iste aperiam voluptates officia vero illo
            harum tenetur nisi sapiente? Necessitatibus, fugiat inventore
            placeat modi natus eligendi recusandae in quia at optio, veritatis
            maiores sunt nobis hic. Exercitationem delectus autem vitae debitis
            eius.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In animi
            reprehenderit natus quo velit voluptates numquam atque adipisci
            dignissimos, praesentium ipsam. Id quod doloribus cupiditate facere
            illo ipsa vitae eveniet alias totam cumque autem distinctio, ullam
            iure, maiores quidem.
          </p>
        </div>
      </div>
      <div className="text-xl py-2">
        <Title text1={"WHY"} text2={"CHOOSE US?"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            atque perspiciatis perferendis voluptatum quo minima vitae similique
            cum, dolore aspernatur deleniti corrupti provident autem fugit odit
            libero inventore, iusto veritatis.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            atque perspiciatis perferendis voluptatum quo minima vitae similique
            cum, dolore aspernatur deleniti corrupti provident autem fugit odit
            libero inventore, iusto veritatis.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            atque perspiciatis perferendis voluptatum quo minima vitae similique
            cum, dolore aspernatur deleniti corrupti provident autem fugit odit
            libero inventore, iusto veritatis.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
