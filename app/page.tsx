import { Calendar, Card, List, ListItem } from "@/components";
import Image from "next/image";

const Home = () => {
  return (
    <Card className="h-max w-max">
      <Calendar />

      <List className="grid gap-2 py-5">
        <ListItem>
          <time
            dateTime="17:00"
            className="rounded-full bg-primary-300 px-2 py-1 text-sm"
          >
            17:00
          </time>

          <Image src="/images/kkengee.webp" alt="예지" width={24} height={24} />

          <span>일정</span>
        </ListItem>

        <ListItem>
          <time
            dateTime="17:00"
            className="rounded-full bg-primary-300 px-2 py-1 text-sm"
          >
            17:00
          </time>

          <Image src="/images/kkengee.webp" alt="예지" width={24} height={24} />

          <span>일정</span>
        </ListItem>
      </List>
    </Card>
  );
};

export default Home;
