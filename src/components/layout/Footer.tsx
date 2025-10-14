import React, { useState } from "react";
import { X, Mail, Github, Linkedin, MessageCircle, Send } from "lucide-react";
import { useForm } from "@/src/contexts/FormContext";

type FooterProps = {
  isOpen: boolean;
  onClose: () => void;
};
function ContactModal({ isOpen, onClose }: FooterProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("Por favor, preencha todos os campos");
      return;
    }

    setStatus("Enviando mensagem...");

    const webhookUrl =
      "https://discordapp.com/api/webhooks/1427453994346877042/s8tx9qamlx8ocdUjCBFkxB32RYVpHcPwz7yyOZ_An3ccK2KjqJFhau9BxCLgguMnVmYm";

    const payload = {
      username: "YANGO WEBs",
      avatar_url: "https://avatars.githubusercontent.com/u/91913602?s=96&v=4",
      embeds: [
        {
          title: "Nova mensagem YANGO WEB's criado:",
          color: 3447003,
          description: `**${formData.subject}**`,
          fields: [
            {
              name: "ID",
              value: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            },
            {
              name: "Nome",
              value: formData.name,
            },
            {
              name: "Email",
              value: formData.email,
            },
            {
              name: "Assunto",
              value: formData.subject,
            },
            {
              name: "Mensagem",
              value: formData.message,
            },
          ],
          footer: {
            text: "Criado em:",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setTimeout(() => {
          onClose();
          setFormData({ name: "", email: "", subject: "", message: "" });
          setStatus("");
        }, 2000);
      } else {
        setStatus("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      setStatus("Erro ao enviar mensagem. Tente novamente.");
      console.error("Erro:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={onClose}
        >
          <div
            className="bg-zinc-200 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-800 to-cyan-500 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">
                Entre em Contato
              </h2>
              <button
                onClick={onClose}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <div className="p-6 space-y-2 overflow-y-auto">
              <div
                className="flex flex-col animate-slideIn"
                style={{ animationDelay: "0.1s" }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="max-w-lg  px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Seu nome"
                />
              </div>

              <div
                className="flex flex-col animate-slideIn"
                style={{ animationDelay: "0.2s" }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>

              <div
                className="flex flex-col animate-slideIn"
                style={{ animationDelay: "0.3s" }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div
                className="flex flex-col animate-slideIn"
                style={{ animationDelay: "0.4s" }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-200"
                  placeholder="Sua mensagem..."
                />
              </div>

              {status && (
                <div
                  className={`text-sm text-center p-3 rounded-lg animate-bounce ${
                    status.includes("Preencha")
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {status}
                </div>
              )}

              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 animate-slideIn"
                style={{ animationDelay: "0.5s" }}
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out backwards;
        }
      `}</style>
    </div>
  );
}

function Footer() {
  const { isFormOpen, openForm, closeForm } = useForm();

  return (
    <div className="mt-20">
      <div className="text-center flex justify-center items-center border-t border-gray-400 mt-12 py-6">
        <ul className="flex items-center justify-center flex-wrap gap-5 md:gap-8 group select-none">
          <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
            <button
              onClick={() => openForm()}
              className="flex gap-2 items-center cursor-pointer"
            >
              <span>Gmail</span>
              <Mail size={24} />
            </button>
          </li>
          <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/YagoB16"
              className="flex gap-2"
            >
              <span>Github</span>
              <Github size={24} />
            </a>
          </li>
          <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/yago-barbosa-35762b219/"
              className="flex gap-2"
            >
              <span>LinkedIn</span>
              <Linkedin size={24} />
            </a>
          </li>
          <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/5511971824260?text=Ol%C3%A1%2C%20visita%20do%20site%20"
              className="flex gap-2"
            >
              <span>WhatsApp</span>
              <MessageCircle size={24} />
            </a>
          </li>
        </ul>
      </div>

      <ContactModal isOpen={isFormOpen} onClose={() => closeForm()} />
    </div>
  );
}

export default Footer;
