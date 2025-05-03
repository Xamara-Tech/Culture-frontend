
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  category?: string;
  description?: string;
}
export default function ProjectCard({
  title='', 
  imageUrl='',
  category='', 
  
}: ProjectCardProps) {
  return (
    <Card 
    className="w-full max-w-[300px] rounded-md overflow-hidden 
    border border-2 border-blue-300 bg-[#E6F7FF] shadow-lg 
    hover:shadow-xl transition-all m-2
    "   
    >

      <div className="relative w-full aspect-[16/16]">
        <img
            src={imageUrl}
            alt={`${title} preview`}
            className="w-full h-full object-"
        />
      </div>
      <CardContent className="p-4 sm:p-5 text-center">
        <CardTitle className="text-base sm:text-lg text-left font-bold text-blue-900 ">{title}</CardTitle>
        <CardDescription className="text-md text-gray-600 text-left mt-2">{category}</CardDescription>
        <div className="flex justify-start">
         
        </div>
      </CardContent>
    </Card>
  );
}