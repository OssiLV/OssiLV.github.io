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
            <AccordionItem value={`item-${i.toFixed()}`}>
              <AccordionTrigger className="text-lg">{item.title}</AccordionTrigger>
              <AccordionContent>
                {item.description}
                <ul className="list-item">
                    {item.list?.map(item => (
                        <li key={item.description} className="">
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