import { StatelessWidget } from "./widget";

const render = (widget: StatelessWidget): string => {
    const builtWidget = widget.build(),
      element = builtWidget.createElement(),
      { html, styles, scripts } = element.render();
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/2.0.0/modern-normalize.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <style> 
          ${styles}
        </style>
        <script type="text/javascript">
          window.onload = () => {
            ${scripts}
          }
        </script>
    </head>
    <body>
        ${html}
    </body>
    </html>`;
  },
  post = (widget: StatelessWidget, json: any) => {};

export { post, render };
