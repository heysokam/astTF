//:_____________________________________________________________________
//  astTF  |  Copyright (C) Ivan Mar (sOkam!)  |  GNU LGPLv3 or later  :
//:_____________________________________________________________________
import { type Static } from "@sinclair/typebox"
import * as S from '@astTF/schema'


//______________________________________
// @section Schema Types
//____________________________
// Base Elements
export type Identifier  = Static<typeof S.Identifier>
// Elements
export type Variable    = Static<typeof S.Variable>
export type Procedure   = Static<typeof S.Procedure>
// Root Data
export type Language    = Static<typeof S.Language>
export type Description = Static<typeof S.Description>
export type Metadata    = Static<typeof S.Metadata>
export type TopLevel    = Static<typeof S.TopLevel>
export type astTF       = Static<typeof S.astTF>


//______________________________________
// @section TODO:
//____________________________
export type LiteralValue = Static<typeof S.LiteralValue>

