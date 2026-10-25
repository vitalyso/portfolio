/* @ds-bundle: {"format":4,"namespace":"Vitaly","components":[{"name":"Button"},{"name":"Input"},{"name":"Textarea"},{"name":"Avatar"},{"name":"Logo"},{"name":"NavLink"},{"name":"SocialMedia"},{"name":"Header"},{"name":"ContactForm"},{"name":"ClientFeedback"},{"name":"ShowcaseItem"},{"name":"WorkListItem"},{"name":"AnimatedList"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    return Array.prototype.filter.call(arguments, Boolean).join(" ");
  }

  function svg16(viewBox, d, extra) {
    return function Icon(props) {
      return h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: viewBox, fill: "currentColor", "aria-hidden": true, className: props && props.className }, extra), [].concat(d).map(function (p, i) {
        return typeof p === "string" ? h("path", { key: i, d: p }) : h(p.tag, Object.assign({ key: i }, p.attrs));
      }));
    };
  }

  var IconGitHub = svg16("0 0 16 16", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8");
  var IconTwitter = svg16("0 0 16 16", "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z");
  var IconLinkedIn = svg16("0 0 16 16", "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z");
  var IconMail = svg16("0 0 16 16", "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z");
  var IconStar = svg16("0 0 24 24", [{ tag: "path", attrs: { fillRule: "evenodd", clipRule: "evenodd", d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" } }]);
  var IconCornerArrow = svg16("0 0 24 24", [{ tag: "rect", attrs: { width: 18, height: 18, x: 3, y: 3, rx: 2 } }, "M8 8h8v8", "m8 16 8-8"], { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" });

  var Button = React.forwardRef(function Button(props, ref) {
    var variant = props.variant || "outline";
    var size = props.size || "default";
    var rest = Object.assign({}, props);
    delete rest.variant; delete rest.size;
    return h("button", Object.assign({ ref: ref }, rest, {
      className: cx("vs-btn", "vs-btn-" + variant, "vs-btn-size-" + size, props.className)
    }));
  });

  var Input = React.forwardRef(function Input(props, ref) {
    return h("input", Object.assign({ ref: ref }, props, { className: cx("vs-field", "vs-input", props.className) }));
  });

  var Textarea = React.forwardRef(function Textarea(props, ref) {
    return h("textarea", Object.assign({ ref: ref }, props, { className: cx("vs-field", "vs-textarea", props.className) }));
  });

  function Avatar(props) {
    var size = props.size || 40;
    var failed = React.useState(false);
    var showImage = props.src && !failed[0];
    return h("span", { className: cx("vs-avatar", props.className), style: { width: size, height: size } },
      showImage
        ? h("img", { src: props.src, alt: props.alt || "", onError: function () { failed[1](true); } })
        : h("span", { className: "vs-avatar-fallback" }, props.fallback));
  }

  function Logo(props) {
    var size = props.size || 40;
    var a11y = props.decorative ? { "aria-hidden": true } : { role: "img", "aria-label": props.title || "vitaly" };
    return h("svg", Object.assign({ className: cx("vs-logo", props.className), width: size, height: size, viewBox: "0 0 43 43", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, a11y),
      h("path", { fillRule: "evenodd", clipRule: "evenodd", fill: "currentColor", d: "M21.5 43C33.3741 43 43 33.3741 43 21.5C43 9.62588 33.3741 0 21.5 0C9.62588 0 0 9.62588 0 21.5C0 33.3741 9.62588 43 21.5 43ZM15.5252 13.3005L19.6849 19.8375H15.6198L13.485 16.4673H10.541L21.4843 33.7249L28.6801 22.3167H32.6231L21.4843 39.826L4.60986 13.3005H15.5252ZM17.1902 22.3167H21.2625L21.4843 22.6653L27.4435 13.3005H38.3588L34.2002 19.8375H30.2438L32.3695 16.4673H29.4449L21.4843 29.0957L17.1902 22.3167Z" }));
  }

  function NavLink(props) {
    return h("a", {
      href: props.href,
      onClick: props.onClick,
      "aria-current": props.active ? "true" : undefined,
      className: cx("vs-navlink", props.className)
    }, props.children);
  }

  var DEFAULT_SOCIAL = [
    { label: "GitHub", href: "https://github.com/vitalyso", icon: IconGitHub },
    { label: "Twitter", href: "https://twitter.com/vitaly_so", icon: IconTwitter },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vitalyso", icon: IconLinkedIn }
  ];

  // assembled at runtime so the address isn't in the markup for scrapers
  var DEFAULT_EMAIL = ["hello", "sivkoff.com"].join("@");
  var MAIL_QUERY = "?subject=" + encodeURIComponent("Work Proposal") + "&body=" + encodeURIComponent("Hi Vitaly, I have a product idea, can you help me implementing it?");

  function SocialMedia(props) {
    var links = props.links || DEFAULT_SOCIAL;
    var email = props.email === undefined ? DEFAULT_EMAIL : props.email;
    var items = links.map(function (link) {
      return h("a", { key: link.label, href: link.href, target: "_blank", rel: "noreferrer", "aria-label": link.label }, h(link.icon, null));
    });
    if (email) {
      items.push(h("a", { key: "mail", href: "mailto:" + email + MAIL_QUERY, "aria-label": "Email me" }, h(IconMail, null)));
    }
    return h("div", { className: cx("vs-social", props.className) }, items);
  }

  var DEFAULT_NAV = [
    { id: "about", label: "about", href: "/#about" },
    { id: "work", label: "works", href: "/#work" },
    { id: "feedback", label: "feedback", href: "/#feedback" }
  ];

  function Header(props) {
    var items = props.items || DEFAULT_NAV;
    var fixed = props.fixed !== false;
    var keyOf = function (item) { return item.id || item.label; };
    var active = props.active === undefined ? keyOf(items[0]) : props.active;
    var links = items.map(function (item) {
      return h(NavLink, { key: item.href, href: item.href, active: keyOf(item) === active, onClick: props.onNavigate }, item.label);
    });
    return h("header", { className: cx("vs-header", fixed ? "vs-header-fixed" : null, props.className) },
      h("nav", { className: "vs-header-bar", "aria-label": "Global" },
        h("div", { className: "vs-header-start" },
          h("a", { href: props.homeHref || "/#", className: "vs-header-home", onClick: props.onNavigate },
            h("span", { className: "vs-sr-only" }, "Logo"),
            h(Logo, { size: 40, decorative: true }))),
        h("div", { className: "vs-nav vs-header-nav" }, links),
        h("div", { className: "vs-header-end" }, h(SocialMedia, { links: props.socialLinks, email: props.email }))));
  }

  function wait(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  function FormSent() {
    return h("div", { className: "vs-form-sent", role: "status" },
      h("h2", { className: "vs-form-sent-title" }, h("span", null, "Message Sent"), " ", h("span", { className: "vs-form-sent-emoji" }, "✉️")),
      h("p", { className: "vs-form-sent-copy" }, "Thanks for reaching out. I've got your message and will respond within 24 hours. Looking forward to learning more about your project."));
  }

  function ContactField(props) {
    var Control = props.multiline ? Textarea : Input;
    var rest = Object.assign({}, props);
    delete rest.label; delete rest.multiline;
    return h("div", { className: "vs-form-field" },
      h("label", { className: "vs-label", htmlFor: props.id }, props.label),
      h(Control, Object.assign({ required: true }, rest)));
  }

  function ContactForm(props) {
    var pending = React.useState(false);
    var success = React.useState(false);
    var error = React.useState(null);
    var formRef = React.useRef(null);
    var uid = React.useId();

    function handleSubmit(event) {
      event.preventDefault();
      pending[1](true); success[1](false); error[1](null);
      var data = Object.fromEntries(new FormData(event.currentTarget));

      // the request lasts at least 400ms for better UX
      var request = Promise.resolve().then(function () { return props.onSubmit(data); });
      Promise.all([request, wait(400)])
        .then(function (results) {
          var result = results[0];
          if (result.sent) { success[1](true); formRef.current && formRef.current.reset(); }
          else error[1](result.error || "Server error. Please try again later");
        })
        .catch(function () { error[1]("Server error. Please try again later"); })
        .finally(function () { pending[1](false); });
    }

    if (success[0]) return h(FormSent, null);

    return h("form", { ref: formRef, className: cx("vs-form", props.className), onSubmit: handleSubmit },
      h("div", { hidden: true, "aria-hidden": "true" }, h("input", { name: "csrf", type: "text", tabIndex: -1, autoComplete: "off" })),
      h(ContactField, { id: uid + "-name", name: "name", label: "Name", type: "text", placeholder: "How should I call you?" }),
      h(ContactField, { id: uid + "-email", name: "email", label: "Email", type: "email", placeholder: "Your email address so I can get in touch" }),
      h(ContactField, { id: uid + "-message", name: "message", label: "How can I help you?", multiline: true, minLength: 10, placeholder: "Tell me about your project or problem" }),
      h("div", { className: "vs-form-actions" },
        h(Button, { size: "lg", type: "submit", disabled: pending[0], className: "vs-form-submit" }, pending[0] ? "Sending..." : "Send"),
        error[0] && h("div", { className: "vs-error", role: "alert" }, error[0])));
  }

  function ClientFeedback(props) {
    var stars = [0, 1, 2, 3, 4].map(function (i) { return h(IconStar, { key: i }); });
    return h("figure", { className: cx("vs-feedback", props.className), style: { margin: 0 } },
      h("figcaption", { className: "vs-feedback-head" },
        h("div", { className: "vs-feedback-who" },
          h(Avatar, { src: props.avatar, alt: props.name, size: 40 }),
          h("div", null,
            h("div", { className: "vs-feedback-name" }, props.name),
            h("div", { className: "vs-feedback-company" }, props.company))),
        h("div", { className: "vs-feedback-stars", "aria-label": "5 out of 5" }, stars)),
      h("blockquote", { className: "vs-feedback-quote", style: { margin: "12px 0 0" } }, "“" + props.feedback + "”"));
  }

  function ShowcaseItem(props) {
    return h("a", {
      href: props.href,
      className: cx("vs-showcase", props.className),
      style: { background: props.background, color: props.color }
    },
      h("div", { className: "vs-showcase-copy" }, props.children),
      h("div", { className: "vs-showcase-media" },
        h("div", { className: "vs-showcase-media-inner" },
          h("img", { src: props.bgImage, alt: "" }))));
  }

  function WorkListItem(props) {
    return h("a", { href: props.href, className: cx("vs-worktile", props.className) },
      h("div", { className: "vs-worktile-cover" }, h("img", { src: props.cover, alt: props.title })),
      h("h3", { className: "vs-worktile-caption" }, props.title));
  }

  var LIST_ANIMATION_DELAY = 0.5;

  function AnimatedList(props) {
    var items = props.items || [];
    var base = LIST_ANIMATION_DELAY + (props.baseDelay || 0);
    var delay = function (s) { return { animationDelay: s + "s" }; };
    return h("ul", { className: cx("vs-list", props.rule ? "vs-list-rule-" + props.rule : null, props.className) },
      h("li", { className: "vs-list-title", style: delay(base + (items.length + 1) * 0.1) }, props.title),
      h("li", { className: "vs-list-spacer", "aria-hidden": true }),
      items.map(function (item, index) {
        return h("li", { key: item, className: "vs-list-item", style: delay(base + (items.length - index) * 0.1) }, item);
      }));
  }

  window.Vitaly = Object.assign(window.Vitaly || {}, {
    Button: Button, Input: Input, Textarea: Textarea, Avatar: Avatar, Logo: Logo,
    NavLink: NavLink, SocialMedia: SocialMedia, Header: Header, ContactForm: ContactForm, ClientFeedback: ClientFeedback,
    ShowcaseItem: ShowcaseItem, WorkListItem: WorkListItem, AnimatedList: AnimatedList,
    IconGitHub: IconGitHub, IconTwitter: IconTwitter, IconLinkedIn: IconLinkedIn,
    IconMail: IconMail, IconStar: IconStar, IconCornerArrow: IconCornerArrow
  });
})();
