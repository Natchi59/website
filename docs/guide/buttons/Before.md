# Before button listener

It is possible to add a `before` function to execute code before checks like inhibitors etc.

## Create the button listner

:::: code-group
::: code-group-item JS CommonJS

```js
const { Button } = require("@sheweny/framework");

module.exports = class Btns1And2 extends Button {
  constructor(client) {
    super(client, ["btnId1", "btnId2"]);
  }
  before(button) {
    console.log("Before function");
  }
  execute(button) {
    console.log(button);
  }
};
```

:::
::: code-group-item TS ES Modules

```ts
import { Button, ShewenyClient } from "@sheweny/framework";
import type { ButtonInteraction } from "discord.js";

export class Btns1And2 extends Button {
  constructor(client: ShewenyClient) {
    super(client, ["btnId1", "btnId2"]);
  }
  before(button: ButtonInteraction) {
    console.log("Before function");
  }
  execute(button: ButtonInteraction) {
    console.log(button);
  }
}
```

:::
::::