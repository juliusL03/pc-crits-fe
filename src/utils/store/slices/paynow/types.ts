import {TDefaultResponse, TOmittedFields, TSliceError} from '@/models/common'
import {TQRCode} from '@/models/paynow'

export type TGenerateQRCodePayload = Omit<TQRCode, TOmittedFields | 'expiry_date' | 'base64QRCode'>

export type TGenerateQRCodeResponse = TDefaultResponse<TQRCode>

export type TPaynowSlice = {
	loading: boolean
	error: TSliceError
	message: string | null
	qrCode: TQRCode | null
	generateQRCode: (payload: TGenerateQRCodePayload) => void
}
