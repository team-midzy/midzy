import { Card } from "@/components";

interface FanchantLayoutProps {
  children: React.ReactNode;
}

const FanchantLayout = ({ children }: Readonly<FanchantLayoutProps>) => {
  return (
    <>
      <Card className="col-span-12">
        <span>
          <strong className="text-blue-500">파란색</strong>은 멜로디에 맞춰서,
          <strong className="text-itzy-500"> 핑크색</strong>은 응원법만
          외쳐주세요.
        </span>
      </Card>

      <section className="col-span-12 grid gap-4">{children}</section>
    </>
  );
};

export default FanchantLayout;
