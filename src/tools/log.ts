//:_____________________________________________________________________
//  astTF  |  Copyright (C) Ivan Mar (sOkam!)  |  GNU LGPLv3 or later  :
//:_____________________________________________________________________
/** @fileoverview Tools: Logging Helpers
 * */
import { log as echo } from 'console'
import * as cfg from './cfg'

export function info (...data:unknown[]) :void { echo(cfg.Prefix, ...data) }

