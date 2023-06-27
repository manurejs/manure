import { StatelessWidget } from "./widget";

const removeEmptyStyles = (s: string) => s.replace(/#(.+) {  }/g, "").trim(),
  removeSpace = (s: string) => s.replace(/\n+/g, "\n").trim(),
  draw = ({ html, styles }: { html: string; styles: string }) =>
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/2.0.0/modern-normalize.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
${removeSpace(removeEmptyStyles(styles))}
    </style>
  </head>
  <body>
${html}
  </body>
</html>`,
  render = (widget: StatelessWidget): string => {
    const builtWidget = widget.build(),
      element = builtWidget.createElement(),
      rendered = element.render();
    return draw(rendered);
  },
  post = (widget: StatelessWidget, formData: FormData) => {
    const builtWidget = widget.build();
    builtWidget.post(formData);
    const element = builtWidget.createElement(),
      rendered = element.render();
    return draw(rendered);
  };

export { post, render };
