import { StatelessWidget } from "./widget";

const render = (widget: StatelessWidget): string => {
    const builtWidget = widget.build(),
      element = builtWidget.createElement(),
      { html, styles } = element.render();
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/2.0.0/modern-normalize.min.css" integrity="sha512-4xo8blKMVCiXpTaLzQSLSw3KFOVPWhm/TRtuPVc4WG6kUgjH6J03IBuG7JZPkcWMxJ5huwaBpOpnwYElP/m6wg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <style>
          ${styles.join("\n")}
        </style>
    </head>
    <body>
        ${html}
    </body>
    </html>`;
  },
  post = (widget: StatelessWidget, json: any) => {};

export { render, post };
