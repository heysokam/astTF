//:_____________________________________________________________________
//  astTF  |  Copyright (C) Ivan Mar (sOkam!)  |  GNU LGPLv3 or later  :
//:_____________________________________________________________________
/** @fileoverview Generator for the `T.schema.json` files that describe the astTF Specification
 * */
// @deps std
import { log as echo } from 'console'
// @deps types
import { TSchema } from '@sinclair/typebox'
// @deps astTF
import * as fs from 'fs'
import * as S from './schema'

//______________________________________
// @section Specification Generator: Configuration
//____________________________
const Prefix  = "⸄astTF⸅"
const specDir = "spec/"

//______________________________________
// @section Specification Generator: Helpers
//____________________________
function info (...data:unknown[]) :void { echo(Prefix, ...data) }
function toJson (schema :TSchema) :string { return JSON.stringify(schema, null, 2) }


//______________________________________
// @section Specification Generator: Entry Point
//____________________________
if (process.argv[1] === import.meta.filename) run()
function run() :void {
  for (const file of S.Specification) {
    const path = specDir+file.id
    info("Generating schema file at:", path)
    fs.writeFileSync(path, toJson(file.schema))
  }
}
