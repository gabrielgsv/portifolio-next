import Link from "next/link";

const ContactsList = () => {
  return (
    <div>
      <div className="chat chat-end text-base md:text-xl w-[380px] md:w-[600px] gap-10">
        <div className="chat-bubble bg-amber-600 text-white">Contatos:</div>
      </div>

      <div className="chat chat-start text-base md:text-xl w-[380px] md:w-[600px] gap-10 mt-14">
        <div className="chat-bubble bg-emerald-600 text-white">
          🤙📞WhatsApp:
          <Link
            href="https://wa.me/16992879588"
            target="_blank"
            className="underline underline-offset-[6px] ml-2"
          >
            (16) 99287-9588
          </Link>
        </div>

        <div className="chat-bubble bg-orange-600 text-white">
          📧Email:
          <Link
            href="mailto:gabriel.soares.vilela@gmail.com"
            target="_blank"
            className="underline underline-offset-[6px] ml-2"
          >
            gabriel.soares.vilela@gmail.com
          </Link>
        </div>

        <div className="chat-bubble bg-slate-600 text-white">
          😎GitHub:
          <Link
            href="https://github.com/gabrielgsv"
            target="_blank"
            className="underline underline-offset-[6px] ml-2"
          >
            github.com/gabrielgsv
          </Link>
        </div>

        <div className="chat-bubble bg-sky-800 text-white">
          🧐Linkedin:
          <Link
            href="https://www.linkedin.com/in/gabriel-s-174b4499/"
            target="_blank"
            className="underline underline-offset-[6px] ml-2"
          >
            linkedin.com/in/gabriel-s-174b4499/
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactsList;
