import {
    Accordion as BaseAccordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface Props {
    data: {
      title: string;
      description: string;
      list?: Array<{description: string}>
    }[];
  }
  
  export function Accordion({ data }: Props) {
    return (
      <BaseAccordion type="single" collapsible className="w-full">
        {data.map((item, i) => {
          return (
            <AccordionItem key={item.title} value={`item-${i.toFixed()}`}>
              <AccordionTrigger className="text-lg">{item.title}</AccordionTrigger>
              <AccordionContent>
                {item.description}
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    {item.list?.map(item => (
                        <li key={item.description} className="leading-4 [&:not(:first-child)]:mt-6">
                           {item.description}
                        </li>
                    ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </BaseAccordion>
    );
  }