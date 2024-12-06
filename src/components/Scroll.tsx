import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
interface Props {
    items: {
        title: string,
        description: string;
        img?: string
        url: string
    }[];
  }
  
  
  export function Scroll({ items }: Props) {
    return (
        <ScrollArea className="w-80 md:w-[50rem] whitespace-nowrap rounded-md">
           <div className="flex w-max space-x-4 p-4 md:gap-4">
                {items.map(item => {
                        return <Card key={item.title} className="w-44 h-32">
                                    <CardHeader>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDescription>{item.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="w-40 h-14">
                                        <Button size="sm" variant="link" className="p-0 text-blue-900 underline">
                                            <a href={item.url}>Go to project</a>
                                        </Button>
                                    </CardContent>
                                </Card>
                    
                    })}
           </div>
          
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );
  }