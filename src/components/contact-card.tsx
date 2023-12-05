import { Supervisor } from "../icons/supervisor";

export const ContactCard = () => {
  return (
    <section className="border-cyan rounded-md border-t-2 bg-white px-5 py-6 shadow-lg">
      <h3 className="pb-3 font-semibold">Leanne Graham</h3>
      <div className="text-grayish-blue pb-5 text-xs">
        <p>
          Company: <span className="font-semibold">Romaguera-Crona</span>
        </p>
        <p>
          E-mail: <span className="font-semibold">Sincere@april.biz</span>
        </p>
      </div>
      <div className="flex justify-end">
        <Supervisor size={50} />
      </div>
    </section>
  );
};
