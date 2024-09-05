import Button from "../../components/button"
import Apple from "../../assets/Svgs/Original.svg"
import Google from "../../assets/Svgs/Negative.svg"

const SocialLogin = () => {
  return (
        <div className="font-bold text-darkText flex items-center gap-3 my-4">
        <Button
          name="Apple"
          image={Apple}
          borderCol="border-borderCol"
          borderWidth="border-2"
          rounded="rounded-lg"
        />
        <Button
          name="Google"
          image={Google}
          borderCol="border-borderCol"
          borderWidth="border-2"
          rounded="rounded-lg"
          weight="font-bold"
        />
      </div>
  )
}

export default SocialLogin