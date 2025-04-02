//:_____________________________________________________________________
//  astTF  |  Copyright (C) Ivan Mar (sOkam!)  |  GNU LGPLv3 or later  :
//:_____________________________________________________________________
// @deps libs
import { type Static } from "@sinclair/typebox"
// @deps astTF
import * as S from './schema'


//______________________________________
// @section Schema Types
//____________________________
// Elements: Base
export type Identifier     = Static<typeof S.Identifier>
export type Type           = Static<typeof S.Type>
// Elements: General
export type Expression     = Static<typeof S.Expression>
export type ExpressionList = Static<typeof S.ExpressionList>
export type Statement      = Static<typeof S.Statement>
export type StatementList  = Static<typeof S.StatementList>
// Elements: TopLevel
export type Variable       = Static<typeof S.Variable>
export type Procedure      = Static<typeof S.Procedure>
// Root Data
export type Language       = Static<typeof S.Language>
export type Description    = Static<typeof S.Description>
export type Metadata       = Static<typeof S.Metadata>
export type TopLevel       = Static<typeof S.TopLevel>
export type astTF          = Static<typeof S.astTF>


//______________________________________
// @section TODO:
//____________________________
export type LiteralValue = Static<typeof S.LiteralValue>

