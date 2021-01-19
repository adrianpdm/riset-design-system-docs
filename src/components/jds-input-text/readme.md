# my-component



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                               | Type      | Default     |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------- | --------- | ----------- |
| `disabled`         | `disabled`           | Disable input.                                                                            | `boolean` | `false`     |
| `isMasked`         | `is-masked`          | Set default masking state if `showMaskingIcon` is `true`.                                 | `boolean` | `false`     |
| `label`            | `label`              |                                                                                           | `string`  | `undefined` |
| `maxlength`        | `maxlength`          | Maximum input length                                                                      | `number`  | `undefined` |
| `minlength`        | `minlength`          | Minimum input length                                                                      | `number`  | `undefined` |
| `pattern`          | `pattern`            | Input validation pattern                                                                  | `string`  | `undefined` |
| `placeholder`      | `placeholder`        | Input placeholder                                                                         | `string`  | `undefined` |
| `prefixIcon`       | `prefix-icon`        | Icon on input leftmost                                                                    | `string`  | `undefined` |
| `prefixText`       | `prefix-text`        | Input value prefix                                                                        | `string`  | `undefined` |
| `readonly`         | `readonly`           | Set input as readonly.                                                                    | `boolean` | `false`     |
| `showMaskingIcon`  | `show-masking-icon`  | Masked input. Useful for input type password. Will override suffix icon if set to `true`; | `boolean` | `false`     |
| `suffixIcon`       | `suffix-icon`        | Icon on input rightmost. Won't show if `showMaskingIcon` is set to `true`.                | `string`  | `undefined` |
| `suffixText`       | `suffix-text`        | Input value suffix                                                                        | `string`  | `undefined` |
| `validateOnChange` | `validate-on-change` | Validate value on `change` event. Default: validate value on `input` event.               | `boolean` | `false`     |
| `value`            | `value`              | Input value                                                                               | `string`  | `undefined` |


## Events

| Event       | Description                                                                                                         | Type                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `iconClick` | Emit custom event when prefix or suffix icon is clicked. Masking icon click event won't be emitted by this emitter. | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
