import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

const PREFIX = 'prefix';
const SUFFIX = 'suffix';

@Component({
  tag: 'jds-input-text',
  styleUrl: 'jds-input-text.scss',
  shadow: true,
})
export class JdsInputText {
  @Prop()
  label: string;
  
  /**
   * Input value
   */
  @Prop()
  value: string;

  /** 
   * Input placeholder
  */
  @Prop()
  placeholder: string;

  /**
   * Icon on input leftmost
   */
  @Prop()
  prefixIcon: string;

  /**
   * Input value prefix
   */
  @Prop()
  prefixText: string;

  /**
   * Input value suffix
   */
  @Prop()
  suffixText: string;

  /**
   * Icon on input rightmost.
   * Won't show if `showMaskingIcon` is set to `true`.
   */
  @Prop()
  suffixIcon: string;

  /**
   * Disable input.
  */
  @Prop()
  disabled: boolean = false;

  /**
   * Set input as readonly.
  */
  @Prop()
  readonly: boolean = false;
  
  /**
   * Input validation pattern
  */
  @Prop()
  pattern: string;

  /**
   * Minimum input length
  */
  @Prop()
  minlength: number;
  
  /**
   * Maximum input length
  */
  @Prop()
  maxlength: number;

  /**
   * Masked input. Useful for input type password.
   * Will override suffix icon if set to `true`;
  */
  @Prop()
  showMaskingIcon: boolean = false;

  /**
   * Set default masking state if `showMaskingIcon` is `true`.
  */
  @Prop({ mutable: true })
  isMasked: boolean = false;

  /**
   * Validate value on `change` event. Default: validate value on `input` event.
  */
  @Prop()
  validateOnChange: boolean = false;

  /**
   * Emit custom event when prefix or suffix icon is clicked.
   * Masking icon click event won't be emitted by this emitter.
  */
  @Event({
    eventName: 'iconClick',
    bubbles: false,
  }) iconClickEvent: EventEmitter<string>;

  /**
   * check if string is neither undefined or empty;
   * @param str 
   */
  isStringDefined = (str) => {
    return typeof str === 'string' && !!str.length;
  }

  /**
   * Called when masking icon is clicked.
  */
  onToggleMasking = () => {
    this.isMasked = !this.isMasked;
  }

  /**
   * Called when prefix or suffix icon is clicked.
  */
  onClickIcon = (where) => {
    if ([PREFIX, SUFFIX].includes(where)) {
      this.iconClickEvent.emit(where);
    }
  }

  render() {
    return (
      <div class="jds-input-text">
        <label class="jds-input-text__label">
          <slot name="label">
            { this.label }
          </slot>
        </label>
        <div class="jds-input-text__input-wrapper">
          {
            this.isStringDefined(this.prefixIcon)
              ? <i
                  class="jds-input-text__prefix-icon"
                  onClick={ () => this.onClickIcon(PREFIX) }>
                  { this.prefixIcon }
                </i>
              : ''
          }
          {
            
            this.isStringDefined(this.prefixText)
              ? <span
                  class="jds-input-text__prefix-text">
                  <slot name="prefix">
                    { this.prefixText }
                  </slot>
                </span>
              : ''
          }
          <input
            type={ this.isMasked ? 'password' : 'text' }
            pattern={ this.pattern }
            disabled={ this.disabled }
            readonly={ this.readonly }
            minlength={ this.minlength }
            maxlength={ this.maxlength }
            placeholder={ this.placeholder }
            value={ this.value }>
          </input>
          {
            this.isStringDefined(this.suffixText)
              ? <span
                  class="jds-input-text__suffix-text">
                  <slot name="suffix">
                    { this.suffixText }
                  </slot>
                </span>
              : ''
          }
          {
            // suffix icon will only be shown if showMaskingIcon is not set to true
            this.isStringDefined(this.suffixIcon) && !this.showMaskingIcon
              ? <i
                  class="jds-input-text__suffix-icon"
                  onClick={ () => this.onClickIcon(SUFFIX) }>
                  { this.suffixIcon }
                </i>
              : ''
          }
          {
            this.showMaskingIcon
              ? <i
                  class="jds-input-text__suffix-icon"
                  style={{ 'cursor': 'pointer' }}
                  onClick={ this.onToggleMasking }>
                  { this.isMasked ? 'mata-satu' : 'mata-coret' }
                </i>
              : ''
          }
        </div>
        <p class="jds-input-text__hint">

        </p>
      </div>
    );
  }

}
