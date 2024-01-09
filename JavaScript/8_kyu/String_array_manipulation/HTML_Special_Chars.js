/* ----------------------------------------------------------------------------------------

    Safen User Input Part I - htmlspecialchars

    You are a(n) novice/average/experienced/professional/world-famous Web Developer 
    (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional
    /business website (choose one or more) which contains form fields so visitors can send
    emails or leave a comment on your website with ease. However, with ease comes danger.
    Every now and then, a hacker visits your website and attempts to compromise it through
    the use of XSS (Cross Site Scripting). This is done by injecting script tags into the
    website through form fields which may contain malicious code (e.g. a redirection to
    a malicious website that steals personal information).

    Mission

    Your mission is to implement a function that converts the following potentially
    harmful characters:

    < --> &lt;
    > --> &gt;
    " --> &quot;
    & --> &amp;

---------------------------------------------------------------------------------------- */

/* 
    String.prototype.replaceAll():  returns a new string with all matches of a pattern replaced
                                    by a replacement.
*/

function htmlspecialchars(formData) {
  return formData
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/* 
    Alternative solution:

    String.prototype.replace(): returns a new string with one, some, or all matches of a
                                pattern replaced by a replacement.
*/

function htmlspecialchars(formData) {
  return formData.replace(
    /[<>"&]/g,
    (ch) => ({ "<": "&lt;", ">": "&gt;", '"': "&quot;", "&": "&amp;" }[ch])
  );
}
