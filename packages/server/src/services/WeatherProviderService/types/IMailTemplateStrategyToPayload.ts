import {WeatherProviderType} from '../enum/WeatherProviderType'
import {IVerifyUserMailTemplateStrategyPayload} from '../strategies/WeatherProviderStrategies/OpenWeatherMapWeatherProviderStrategy/types/IVerifyUserMailTemplateStrategyPayload'
import {IChangePasswordMailTemplateStrategyPayload} from '../strategies/ChangePasswordTemplateStrategy/types/IChangePasswordMailTemplateStrategyPayload'
import {
  IWorkspaceInvitationTemplateStrategyPayload,
} from '../strategies/InviteUserToWorkspaceTemplateStrategy/types/IWorkspaceInvitationTemplateStrategyPayload'
import {
  IEnableTwoFactorMailTemplateStrategyPayload,
} from '../strategies/EnableTwoFactorTemplateStrategy/types/IEnableTwoFactorMailTemplateStrategyPayload'
import {
  ITwoFactorLoginMailTemplateStrategyPayload,
} from '../strategies/TwoFactorLoginTemplateStrategy/types/ITwoFactorLoginMailTemplateStrategyPayload'

export interface IMailTemplateStrategyToPayload {
  [WeatherProviderType.VerifyUserMail]: IVerifyUserMailTemplateStrategyPayload
  [WeatherProviderType.ChangePassword]: IChangePasswordMailTemplateStrategyPayload
  [WeatherProviderType.WorkspaceInvitation]: IWorkspaceInvitationTemplateStrategyPayload
  [WeatherProviderType.EnableTwoFactor]: IEnableTwoFactorMailTemplateStrategyPayload
  [WeatherProviderType.TwoFactorLogin]: ITwoFactorLoginMailTemplateStrategyPayload
}
