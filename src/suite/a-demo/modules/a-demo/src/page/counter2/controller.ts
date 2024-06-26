import { BeanControllerPageBase, Local, Use, zz } from '@cabloy/front';
import { ScopeModule } from '../../resource/this.js';
import { Counter } from './counter.js';

export const ParamsSchema = zz.object({});
export type ParamsInput = zz.input<typeof ParamsSchema>;
export type ParamsOutput = zz.output<typeof ParamsSchema>;

export const QuerySchema = zz.object({});
export type QueryInput = zz.input<typeof QuerySchema>;
export type QueryOutput = zz.output<typeof QuerySchema>;

@Local()
export class ControllerPageCounter2 extends BeanControllerPageBase<ScopeModule, QueryOutput, ParamsOutput> {
  @Use()
  $$counter: Counter;
}
