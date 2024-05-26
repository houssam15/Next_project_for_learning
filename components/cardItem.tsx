import { Card, Spinner } from "flowbite-react";
export default function CardItem({title,subtitle}:{title:string , subtitle:number}){
    return (
        <Card href="#" className="max-w-sm bg-[#0e7490] hover:bg-[#0e7490]">
        <h5 className="text-xl font-semibold tracking-wider text-white dark:text-white">
          {title}
        </h5>
        <p className=" text-white text-3xl font-bold dark:text-gray-400">
          {subtitle!=-1?(subtitle):(<Spinner aria-label="Default status example" />)}
        </p>
      </Card>
    );
}