import { useEffect } from "react";

/** FreeToBook guest-review widget already used on the live cottage site. */
export function FtbReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.freetobook.com/widget.js?v=20190925";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      className="ftb-widget"
      data-id="23269"
      data-style="review"
      data-token="J65Rtrgqqs4sineSZUThwQaf3NPPjOqFjwHSgVN488fgKUgjAjtl5Hioojc4C"
    />
  );
}
