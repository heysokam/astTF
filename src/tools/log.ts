//:_____________________________________________________________________
//  astTF  |  Copyright (C) Ivan Mar (sOkam!)  |  GNU LGPLv3 or later  :
//:_____________________________________________________________________
/** @fileoverview Tools: Logging Helpers
 * */
// @deps std
import { log as echo } from 'console'
// @deps astTF
import * as cfg from './cfg'

export function info (...data:unknown[]) :void { echo(cfg.Prefix, ...data) }

