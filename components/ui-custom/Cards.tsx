import Image from "next/image";
import secondPhoto from "@/public/resources/photo_2.png";
import firstPhoto from "@/public/resources/photo_1.png";
import thirdPhoto from "@/public/resources/photo_3.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Cards() {
  return (
    <>
      {/* Container for the cards */}
      <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-10 sm:space-y-0 sm:mt-[2rem] justify-center items-center">
        {/* Card 1 */}
        <Card className="w-full sm:w-[20rem] h-[28rem] bg-[#212936] border-none">
          <CardHeader>
            <span className="flex justify-center items-center bg-[#FCEED8] text-3xl p-3 rounded-full w-[3.5rem] mb-[1rem]">
              ✋
            </span>
            <CardTitle className="text-[#E5E7EB]">
              Collect Feedback at Multiple Touchpoints
            </CardTitle>
            <CardDescription className="mt-[.7rem] text-[#D2D5DA] w-[15rem]">
              Provide a comprehensive understanding of the customer experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={secondPhoto} alt="" className="rounded-md" />
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="w-full sm:w-[20rem] h-[28rem] bg-[#212936] border-none">
          <CardHeader>
            <span className="flex justify-center items-center bg-[#DEE9FC] text-3xl p-3 rounded-full w-[3.5rem] mb-[1rem]">
              🥅
            </span>
            <CardTitle className="text-[#E5E7EB]">
              Ask Targeted and Specific Questions
            </CardTitle>
            <CardDescription className="mt-[.7rem] text-[#D2D5DA] w-[15rem]">
              Avoid vague or open-ended questions that may not yield actionable
              insights.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={firstPhoto} alt="" className="rounded-md" />
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="w-full sm:w-[20rem] h-[28rem] bg-[#212936] border-none">
          <CardHeader>
            <span className="flex justify-center items-center bg-[#FBE5E6] text-3xl p-3 rounded-full w-[3.5rem] mb-[1rem]">
              💬
            </span>
            <CardTitle className="text-[#E5E7EB]">
              Prioritize and Respond to <br /> Feedback
            </CardTitle>
            <CardDescription className="mt-[.7rem] text-[#D2D5DA] mb-[-1.2rem] w-[15rem]">
              Communicate the changes or improvements you&#39;ve made in
              response to their feedback.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={thirdPhoto}
              alt=""
              width={267}
              height={200}
              className="mt-[.8rem] rounded-md"
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
