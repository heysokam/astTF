//:_____________________________________________________________________
//  astTF  |  Copyright (C) Ivan Mar (sOkam!)  |  GNU LGPLv3 or later  :
//:_____________________________________________________________________
/** @fileoverview Generator for the `T.schema.json` files that describe the astTF Specification
 * */
// @deps astTF
import * as cfg from '@tools/cfg'
import { info } from '@tools/log'
import * as F from '@tools/files'
import * as S from '@astTF/schema'


//______________________________________
// @section Specification Generator: Entry Point
//____________________________
if (process.argv[1] === import.meta.filename) run()
function run():void {
  for (const file of S.Specification) {
    const path = cfg.specDir+file.id
    info("Generating schema file at:", path)
    F.write(path, S.toJson(file.schema))
  }
}

