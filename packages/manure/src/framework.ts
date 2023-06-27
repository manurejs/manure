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
