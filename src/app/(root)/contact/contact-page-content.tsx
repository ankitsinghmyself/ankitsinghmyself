"use client";

import { useEffect, useRef } from "react";
import HeaderNeo from "@/components/header-neo";
import FooterNeo from "@/components/footer-neo";
import { contact } from "@/lib/site";

const ContactPageContent = () => {
  const currentYear = new Date().getUTCFullYear();
  const overlayRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Clock update
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toTimeString().split(" ")[0];
      if (timeRef.current) {
        timeRef.current.textContent = `TIMESTAMP: ${timeString}`;
      }
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    // Mouse parallax for blueprint overlay
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (overlayRef.current) {
        overlayRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(214, 227, 255, 0.4) 0%, transparent 80%)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Form submission via mailto:
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const senderEmail = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = `Portfolio enquiry from ${name || "website visitor"}`;
    const body = [`Name: ${name}`, `Email: ${senderEmail}`, "", message].join(
      "\n"
    );

    const btn = form.querySelector("button[type='submit']") as HTMLButtonElement;
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `UPLOADING... <span class="material-symbols-outlined animate-spin" data-icon="sync">sync</span>`;
    }

    setTimeout(() => {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      setTimeout(() => {
        if (btn) {
          btn.classList.remove("bg-primary");
          btn.classList.add("bg-secondary");
          btn.innerHTML = `SUCCESS_TRANSMITTED <span class="material-symbols-outlined" data-icon="check_circle">check_circle</span>`;

          setTimeout(() => {
            btn.disabled = false;
            btn.classList.add("bg-primary");
            btn.classList.remove("bg-secondary");
            btn.innerHTML = `EXECUTE_TRANSMISSION <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="send">send</span>`;
            form.reset();
          }, 3000);
        }
      }, 500);
    }, 1500);
  };

  const encryptedChannels = [
    {
      icon: "share",
      label: "LINKEDIN_STRATUM",
      href: contact.linkedin,
    },
    {
      icon: "code",
      label: "GITHUB_REPOSITORY",
      href: contact.github,
    },
    {
      icon: "mail",
      label: "DIRECT_UPLINK",
      href: `mailto:${contact.email}`,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-body-md">
      {/* Blueprint Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 14.375% 99.3179%, rgba(214, 227, 255, 0.4) 0%, transparent 80%)",
        }}
      />

      <HeaderNeo />

      <main className="relative z-10 pt-16 pb-24 px-margin-mobile md:px-gutter max-w-[1440px] mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Context & Info */}
          <div className="lg:col-span-5 space-y-12">
            <section>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                <span className="font-data-mono text-label-sm text-secondary uppercase tracking-widest">
                  SYSTEM_READY
                </span>
              </div>
              <div className="inline-flex items-center gap-2 mb-4 ml-6">
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="font-data-mono text-label-sm text-primary font-bold uppercase tracking-widest border border-primary px-2 py-0.5">
                  STATUS: OPEN_TO_WORK
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg mb-6">
                INITIATE_HANDSHAKE
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-prose">
                Interface with the core architect. Submit technical inquiries,
                project proposals, or system integration requests through the
                secured communication portal.
              </p>
            </section>

            {/* Technical Annotations */}
            <div className="space-y-8 hidden md:block">
              <div className="flex items-start gap-4">
                <div className="annotation-line w-12 mt-3" />
                <div>
                  <span className="font-data-mono text-label-sm text-outline">
                    LOC_COORDINATES
                  </span>
                  <p className="font-data-mono text-body-md font-bold">
                    40.7128° N, 74.0060° W
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="annotation-line w-12 mt-3" />
                <div>
                  <span className="font-data-mono text-label-sm text-outline">
                    RESPONSE_LATENCY
                  </span>
                  <p className="font-data-mono text-body-md font-bold">
                    {'<'} 24_HOURS
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="annotation-line w-12 mt-3" />
                <div>
                  <span className="font-data-mono text-label-sm text-outline">
                    TIME_ZONE
                  </span>
                  <p className="font-data-mono text-body-md font-bold">
                    IST (UTC+5:30)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="annotation-line w-12 mt-3" />
                <div>
                  <span className="font-data-mono text-label-sm text-outline">
                    AVAILABILITY
                  </span>
                  <p className="font-data-mono text-body-md font-bold">
                    US_HOURS_COMPATIBLE
                  </p>
                </div>
              </div>
            </div>

            {/* Encrypted Channels */}
            <section className="p-6 bg-surface-container-low cad-border">
              <h3 className="font-data-mono text-label-md font-bold mb-6 text-primary">
                ENCRYPTED_CHANNELS
              </h3>
              <div className="space-y-4">
                {encryptedChannels.map((channel) => (
                  <a
                    key={channel.label}
                    className="flex items-center justify-between p-3 border border-outline-variant bg-white hover:border-secondary transition-all group"
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary">
                        {channel.icon}
                      </span>
                      <span className="font-data-mono text-label-md">
                        {channel.label}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Right Side: Connection Protocol Form */}
          <div className="lg:col-span-7">
            <div className="bg-white cad-border relative overflow-hidden">
              {/* Technical Header Decoration */}
              <div className="bg-primary px-6 py-3 flex justify-between items-center">
                <span className="font-data-mono text-label-sm text-white uppercase tracking-tighter">
                  CONNECTION_PROTOCOL_V2.0.4
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-on-primary-container" />
                  <div className="w-2 h-2 rounded-full bg-on-primary-container" />
                </div>
              </div>

              <form
                className="p-8 md:p-12 space-y-10"
                id="contact-form"
                onSubmit={handleSubmit}
              >
                {/* Name Field */}
                <div className="relative group">
                  <label className="font-data-mono text-label-sm text-outline absolute -top-3 left-3 bg-white px-2 z-10">
                    IDENTITY.NAME
                  </label>
                  <div className="flex">
                    <span className="flex items-center justify-center px-4 bg-surface-container-high border-y border-l border-outline-variant text-on-surface-variant">
                      <span className="material-symbols-outlined">
                        fingerprint
                      </span>
                    </span>
                    <input
                      className="w-full bg-transparent border border-outline-variant focus:border-secondary focus:ring-0 font-data-mono text-body-md p-4 transition-colors"
                      placeholder="ENTER_NAME..."
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label className="font-data-mono text-label-sm text-outline absolute -top-3 left-3 bg-white px-2 z-10">
                    COMM_UPLINK.EMAIL
                  </label>
                  <div className="flex">
                    <span className="flex items-center justify-center px-4 bg-surface-container-high border-y border-l border-outline-variant text-on-surface-variant">
                      <span className="material-symbols-outlined">
                        alternate_email
                      </span>
                    </span>
                    <input
                      className="w-full bg-transparent border border-outline-variant focus:border-secondary focus:ring-0 font-data-mono text-body-md p-4 transition-colors"
                      placeholder="ADDRESS@HOST.EXT"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <label className="font-data-mono text-label-sm text-outline absolute -top-3 left-3 bg-white px-2 z-10">
                    DATA_PACKET.MESSAGE
                  </label>
                  <textarea
                    className="w-full bg-transparent border border-outline-variant focus:border-secondary focus:ring-0 font-data-mono text-body-md p-4 transition-colors resize-none"
                    placeholder="ENCODE_MESSAGE_HERE..."
                    rows={5}
                    name="message"
                    required
                  />
                  <div className="absolute bottom-3 right-3 opacity-20 pointer-events-none">
                    <span className="material-symbols-outlined text-4xl">
                      data_array
                    </span>
                  </div>
                </div>

                {/* Technical Stats Footer in Form */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-outline-variant overflow-hidden">
                        <div className="h-full bg-secondary w-2/3" />
                      </div>
                      <span className="font-data-mono text-[10px] text-outline">
                        SIGNAL_STRENGTH: 67%
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-outline-variant overflow-hidden">
                        <div className="h-full bg-secondary w-full animate-pulse" />
                      </div>
                      <span className="font-data-mono text-[10px] text-outline">
                        ENCRYPTION: AES-256
                      </span>
                    </div>
                  </div>
                  <button
                    className="w-full md:w-auto bg-primary text-white font-data-mono text-label-md px-10 py-4 border-2 border-primary hover:bg-secondary hover:border-secondary transition-all duration-300 flex items-center justify-center gap-3 group"
                    type="submit"
                  >
                    EXECUTE_TRANSMISSION
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      send
                    </span>
                  </button>
                </div>
              </form>

              {/* Bottom Form Status bar */}
              <div className="bg-surface-container-high border-t border-outline-variant px-6 py-2 flex justify-between">
                <span className="font-data-mono text-[10px] text-on-surface-variant italic">
                  ID: PROTOCOL_CF_994
                </span>
                <span
                  className="font-data-mono text-[10px] text-on-surface-variant"
                  ref={timeRef}
                >
                  TIMESTAMP: --:--:--
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Schematic Placeholder */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cad-border p-6 bg-white flex flex-col gap-4">
            <span className="font-data-mono text-label-sm text-secondary">
              STRUCT_01
            </span>
            <div className="h-32 border border-dashed border-outline-variant flex items-center justify-center overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center opacity-40"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7bthBnXr6pVp_KepPAKhbXN092aZ1S9MjdkZgL5D9DLfDSZPz4Llgsl_0LH-j4G5R_tvGbCp24X6w-ViNy1pMgZ6G_PJtbcRz8P0TTGbW7f-HAuiqJMPgsgyMMYfK8AVsHTyXhfbzbYB8RkXyOMtbL3xUyluYbWeE4Uvo2z8L9Re9qm4BmQo3m7aCUqR6bLH3paOGCz3DEj0jThudMzdPfHTbWvKu-j1xMV0mfAQN3XbsRjELs-KgLg')",
                }}
              />
            </div>
            <p className="font-data-mono text-[11px] text-outline">
              MODULAR_CORE_INTEGRITY: OPTIMAL
            </p>
          </div>
          <div className="cad-border p-6 bg-white flex flex-col gap-4">
            <span className="font-data-mono text-label-sm text-secondary">
              STRUCT_02
            </span>
            <div className="h-32 border border-dashed border-outline-variant flex items-center justify-center overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center opacity-40"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4bpUw9pC_Dj2D_Kj4rLKr8OJfAZQ0-zEVpAOPGTl5ugSIryXF3bzffVr_HjfKoOL5X6rXiGAzQ9VYEIhgm5dFM1fvfN4L1mdfx_vGpTART8xn1ag-wtwhD2Tn6wMBh4prwu9f_yz7Zfu-vYyBVRD4ercbDoCIPzB63kFYFvyd3BLszJIOrdL_nJVajuo8XjXWufaaCOZUgCqYHp3v5TM4v9QjgYYM-07kmczpvxEUjbsI68XYDdDCsw')",
                }}
              />
            </div>
            <p className="font-data-mono text-[11px] text-outline">
              DATA_FLOW_STABILITY: 100%
            </p>
          </div>
          <div className="cad-border p-6 bg-white flex flex-col gap-4">
            <span className="font-data-mono text-label-sm text-secondary">
              STRUCT_03
            </span>
            <div className="h-32 border border-dashed border-outline-variant flex items-center justify-center overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center opacity-40"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDthoYLTJ6gdVX5aaUgva3WBbVo7j9Bns2qLjAnO64YhuSYv-PidzEBb3pfPNgO_J2q7OALdTzTVvm-KxW_HUZzZnnngBcBrmfSeHpupufuqcXIcKlBgOSjIOuOlzNjD03YKqHgExpcqf6VUna0OHyYhL03P1QVEN3EFIaNhqWLo-ypiD4pQIE-ZBGdriyObvogigKOddw1PbuMm19gJ6ZPANio_s7I48MCLnoAcWgP36JJr3CXvlA6Gw')",
                }}
              />
            </div>
            <p className="font-data-mono text-[11px] text-outline">
              ENCRYPTION_HASH: VERIFIED
            </p>
          </div>
        </div>
      </main>

      <FooterNeo year={currentYear} />
    </div>
  );
};

export default ContactPageContent;

