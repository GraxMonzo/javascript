import type { LocalizationResource } from '@clerk/types';

const commonTexts = {
  signIn: {
    phoneCode: {
      title: 'Kiểm tra điện thoại của bạn',
      subtitle: 'để tiếp tục với {{applicationName}}',
      formTitle: 'Mã xác nhận',
      formSubtitle: 'Nhập mã xác nhận đã được gửi đến số điện thoại của bạn',
      resendButton: 'Không nhận được mã? Gửi lại',
    },
  },
} as const;

export const viVN: LocalizationResource = {
  locale: 'vi-VN',
  socialButtonsBlockButton: 'Tiếp tục với {{provider|titleize}}',
  dividerText: 'hoặc',
  formFieldLabel__emailAddress: 'Địa chỉ email',
  formFieldLabel__emailAddresses: 'Các địa chỉ email',
  formFieldLabel__phoneNumber: 'Số điện thoại',
  formFieldLabel__username: 'Tên người dùng',
  formFieldLabel__emailAddress_username: 'Địa chỉ email hoặc tên người dùng',
  formFieldLabel__password: 'Mật khẩu',
  formFieldLabel__currentPassword: 'Mật khẩu hiện tại',
  formFieldLabel__newPassword: 'Mật khẩu mới',
  formFieldLabel__confirmPassword: 'Xác nhận mật khẩu',
  formFieldLabel__signOutOfOtherSessions: 'Đăng xuất khỏi tất cả các thiết bị khác',
  formFieldLabel__firstName: 'Tên',
  formFieldLabel__lastName: 'Họ',
  formFieldLabel__backupCode: 'Mã sao lưu',
  formFieldLabel__organizationName: 'Tên tổ chức',
  formFieldLabel__organizationSlug: 'Đường dẫn rút gọn',
  formFieldLabel__role: 'Vai trò',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses:
    'Nhập hoặc dán một hoặc nhiều địa chỉ email, cách nhau bằng khoảng trắng hoặc dấu phẩy',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__phoneNumber_username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldError__notMatchingPasswords: 'Mật khẩu không khớp.',
  formFieldError__matchingPasswords: 'Mật khẩu khớp.',
  formFieldAction__forgotPassword: 'Quên mật khẩu?',
  formFieldHintText__optional: 'Tùy chọn',
  formButtonPrimary: 'Tiếp tục',
  signInEnterPasswordTitle: 'Nhập mật khẩu của bạn',
  backButton: 'Quay lại',
  footerActionLink__useAnotherMethod: 'Sử dụng phương pháp khác',
  badge__primary: 'Chính',
  badge__thisDevice: 'Thiết bị này',
  badge__userDevice: 'Thiết bị người dùng',
  badge__otherImpersonatorDevice: 'Thiết bị nhân danh khác',
  badge__default: 'Mặc định',
  badge__unverified: 'Chưa xác minh',
  badge__requiresAction: 'Yêu cầu hành động',
  badge__you: 'Bạn',
  footerPageLink__help: 'Trợ giúp',
  footerPageLink__privacy: 'Quyền riêng tư',
  footerPageLink__terms: 'Điều khoản',
  paginationButton__previous: 'Trước',
  paginationButton__next: 'Tiếp',
  paginationRowText__displaying: 'Hiển thị',
  paginationRowText__of: 'của',
  membershipRole__admin: 'Quản trị viên',
  membershipRole__basicMember: 'Thành viên',
  membershipRole__guestMember: 'Khách',
  signUp: {
    start: {
      title: 'Tạo tài khoản của bạn',
      subtitle: 'để tiếp tục với {{applicationName}}',
      actionText: 'Đã có tài khoản?',
      actionLink: 'Đăng nhập',
    },
    emailLink: {
      title: 'Xác minh email của bạn',
      subtitle: 'để tiếp tục với {{applicationName}}',
      formTitle: 'Liên kết xác minh',
      formSubtitle: 'Sử dụng liên kết xác minh đã được gửi đến địa chỉ email của bạn',
      resendButton: 'Không nhận được liên kết? Gửi lại',
      verified: {
        title: 'Đăng ký thành công',
      },
      loading: {
        title: 'Đang đăng ký...',
      },
      verifiedSwitchTab: {
        title: 'Xác minh email thành công',
        subtitle: 'Quay lại cửa sổ mới được mở để tiếp tục',
        subtitleNewTab: 'Quay lại cửa sổ trước để tiếp tục',
      },
    },
    emailCode: {
      title: 'Xác minh email của bạn',
      subtitle: 'để tiếp tục với {{applicationName}}',
      formTitle: 'Mã xác minh',
      formSubtitle: 'Nhập mã xác minh đã được gửi đến địa chỉ email của bạn',
      resendButton: 'Không nhận được mã? Gửi lại',
    },
    phoneCode: {
      title: 'Xác minh số điện thoại của bạn',
      subtitle: 'để tiếp tục với {{applicationName}}',
      formTitle: 'Mã xác minh',
      formSubtitle: 'Nhập mã xác minh đã được gửi đến số điện thoại của bạn',
      resendButton: 'Không nhận được mã? Gửi lại',
    },
    continue: {
      title: 'Điền các trường bị thiếu',
      subtitle: 'để tiếp tục với {{applicationName}}',
      actionText: 'Đã có tài khoản?',
      actionLink: 'Đăng nhập',
    },
  },
  signIn: {
    start: {
      title: 'Đăng nhập',
      subtitle: 'để tiếp tục với {{applicationName}}',
      actionText: 'Chưa có tài khoản?',
      actionLink: 'Đăng ký',
      actionLink__use_email: 'Sử dụng email',
      actionLink__use_phone: 'Sử dụng số điện thoại',
      actionLink__use_username: 'Sử dụng tên đăng nhập',
      actionLink__use_email_username: 'Sử dụng email hoặc tên đăng nhập',
    },
    password: {
      title: 'Nhập mật khẩu của bạn',
      subtitle: 'để tiếp tục với {{applicationName}}',
      actionLink: 'Sử dụng phương pháp khác',
    },
    forgotPasswordAlternativeMethods: {
      title: 'Quên mật khẩu?',
      label__alternativeMethods: 'Hoặc, đăng nhập bằng phương pháp khác.',
      blockButton__resetPassword: 'Đặt lại mật khẩu',
    },
    forgotPassword: {
      title_email: 'Kiểm tra email của bạn',
      title_phone: 'Kiểm tra điện thoại của bạn',
      subtitle: 'để đặt lại mật khẩu của bạn',
      formTitle: 'Mã đặt lại mật khẩu',
      formSubtitle_email: 'Nhập mã được gửi đến địa chỉ email của bạn',
      formSubtitle_phone: 'Nhập mã được gửi đến số điện thoại của bạn',
      resendButton: 'Không nhận được mã? Gửi lại',
    },
    resetPassword: {
      title: 'Đặt lại mật khẩu',
      formButtonPrimary: 'Đặt lại mật khẩu',
      successMessage: 'Mật khẩu của bạn đã được thay đổi thành công. Đang đăng nhập, vui lòng chờ một chút.',
    },
    resetPasswordMfa: {
      detailsLabel: 'Chúng tôi cần xác minh danh tính của bạn trước khi đặt lại mật khẩu.',
    },
    emailCode: {
      title: 'Kiểm tra email của bạn',
      subtitle: 'để tiếp tục với {{applicationName}}',
      formTitle: 'Mã xác minh',
      formSubtitle: 'Nhập mã xác minh được gửi đến địa chỉ email của bạn',
      resendButton: 'Không nhận được mã? Gửi lại',
    },
    emailLink: {
      title: 'Kiểm tra email của bạn',
      subtitle: 'để tiếp tục với {{applicationName}}',
      formTitle: 'Liên kết xác minh',
      formSubtitle: 'Sử dụng liên kết xác minh được gửi đến email của bạn',
      resendButton: 'Không nhận được liên kết? Gửi lại',
      unusedTab: {
        title: 'Bạn có thể đóng cửa sổ này',
      },
      verified: {
        title: 'Đăng nhập thành công',
        subtitle: 'Bạn sẽ được chuyển hướng sớm',
      },
      verifiedSwitchTab: {
        subtitle: 'Quay trở lại cửa sổ gốc để tiếp tục',
        titleNewTab: 'Đăng nhập trên cửa sổ khác',
        subtitleNewTab: 'Quay trở lại cửa sổ mới mở để tiếp tục',
      },
      loading: {
        title: 'Đang đăng nhập...',
        subtitle: 'Bạn sẽ được chuyển hướng sớm',
      },
      failed: {
        title: 'Liên kết xác minh này không hợp lệ',
        subtitle: 'Quay trở lại cửa sổ gốc để tiếp tục.',
      },
      expired: {
        title: 'Liên kết xác minh này đã hết hạn',
        subtitle: 'Quay trở lại cửa sổ gốc để tiếp tục.',
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: '' },
    totpMfa: {
      title: 'Xác minh hai bước',
      subtitle: '',
      formTitle: 'Mã xác minh',
      formSubtitle: 'Nhập mã xác minh được tạo bởi ứng dụng xác thực của bạn',
    },
    backupCodeMfa: {
      title: 'Nhập mã sao lưu',
      subtitle: 'để tiếp tục với {{applicationName}}',
      formTitle: '',
      formSubtitle: '',
    },
    alternativeMethods: {
      title: 'Sử dụng phương pháp khác',
      actionLink: 'Nhận trợ giúp',
      blockButton__emailLink: 'Gửi liên kết qua email cho {{identifier}}',
      blockButton__emailCode: 'Gửi mã qua email cho {{identifier}}',
      blockButton__phoneCode: 'Gửi mã SMS cho {{identifier}}',
      blockButton__password: 'Đăng nhập bằng mật khẩu của bạn',
      blockButton__totp: 'Sử dụng ứng dụng xác thực của bạn',
      blockButton__backupCode: 'Sử dụng mã sao lưu',
      getHelp: {
        title: 'Nhận trợ giúp',
        content: `Nếu bạn gặp khó khăn khi đăng nhập vào tài khoản của mình, hãy gửi email cho chúng tôi và chúng tôi sẽ cùng bạn khôi phục quyền truy cập trong thời gian ngắn nhất.`,
        blockButton__emailSupport: 'Hỗ trợ qua email',
      },
    },
    noAvailableMethods: {
      title: 'Không thể đăng nhập',
      subtitle: 'Đã xảy ra lỗi',
      message: 'Không thể tiếp tục đăng nhập. Không có phương thức xác thực nào khả dụng.',
    },
  },
  userProfile: {
    mobileButton__menu: 'Menu',
    formButtonPrimary__continue: 'Tiếp tục',
    formButtonPrimary__finish: 'Hoàn thành',
    formButtonReset: 'Hủy',
    start: {
      headerTitle__account: 'Tài khoản',
      headerTitle__security: 'Bảo mật',
      headerSubtitle__account: 'Quản lý thông tin tài khoản của bạn',
      headerSubtitle__security: 'Quản lý các tùy chọn bảo mật',
      profileSection: {
        title: 'Hồ sơ',
      },
      usernameSection: {
        title: 'Tên người dùng',
        primaryButton__changeUsername: 'Thay đổi tên người dùng',
        primaryButton__setUsername: 'Đặt tên người dùng',
      },
      emailAddressesSection: {
        title: 'Địa chỉ email',
        primaryButton: 'Thêm địa chỉ email',
        detailsTitle__primary: 'Địa chỉ email chính',
        detailsSubtitle__primary: 'Đây là địa chỉ email chính',
        detailsAction__primary: 'Hoàn tất xác minh',
        detailsTitle__nonPrimary: 'Đặt làm địa chỉ email chính',
        detailsSubtitle__nonPrimary:
          'Đặt địa chỉ email này làm chính để nhận thông tin liên quan đến tài khoản của bạn.',
        detailsAction__nonPrimary: 'Đặt làm chính',
        detailsTitle__unverified: 'Địa chỉ email chưa xác minh',
        detailsSubtitle__unverified: 'Địa chỉ email này chưa được xác minh và có thể bị giới hạn chức năng',
        detailsAction__unverified: 'Hoàn tất xác minh',
        destructiveActionTitle: 'Xóa',
        destructiveActionSubtitle: 'Xóa địa chỉ email này và loại bỏ khỏi tài khoản của bạn',
        destructiveAction: 'Xóa địa chỉ email',
      },
      phoneNumbersSection: {
        title: 'Số điện thoại',
        primaryButton: 'Thêm số điện thoại',
        detailsTitle__primary: 'Số điện thoại chính',
        detailsSubtitle__primary: 'Đây là số điện thoại chính',
        detailsAction__primary: 'Hoàn tất xác minh',
        detailsTitle__nonPrimary: 'Đặt làm số điện thoại chính',
        detailsSubtitle__nonPrimary:
          'Đặt số điện thoại này làm chính để nhận thông tin liên quan đến tài khoản của bạn.',
        detailsAction__nonPrimary: 'Đặt làm chính',
        detailsTitle__unverified: 'Số điện thoại chưa xác minh',
        detailsSubtitle__unverified: 'Số điện thoại này chưa được xác minh và có thể bị giới hạn chức năng',
        detailsAction__unverified: 'Hoàn tất xác minh',
        destructiveActionTitle: 'Xóa',
        destructiveActionSubtitle: 'Xóa số điện thoại này và loại bỏ khỏi tài khoản của bạn',
        destructiveAction: 'Xóa số điện thoại',
      },
      connectedAccountsSection: {
        title: 'Tài khoản đã kết nối',
        primaryButton: 'Kết nối tài khoản',
        title__conectionFailed: 'Thử lại kết nối không thành công',
        title__connectionFailed: 'Thử lại kết nối không thành công',
        title__reauthorize: 'Yêu cầu xác thực lại',
        subtitle__reauthorize:
          'Phạm vi yêu cầu đã được cập nhật và bạn có thể gặp phải hạn chế chức năng. Vui lòng xác thực lại ứng dụng này để tránh sự cố.',
        actionLabel__conectionFailed: 'Thử lại',
        actionLabel__connectionFailed: 'Thử lại',
        actionLabel__reauthorize: 'Xác thực ngay',
        destructiveActionTitle: 'Xóa',
        destructiveActionSubtitle: 'Xóa tài khoản đã kết nối này khỏi tài khoản của bạn',
        destructiveActionAccordionSubtitle: 'Xóa tài khoản đã kết nối',
      },
      enterpriseAccountsSection: {
        title: 'Tài khoản doanh nghiệp',
      },
      passwordSection: {
        title: 'Mật khẩu',
        primaryButton__changePassword: 'Thay đổi mật khẩu',
        primaryButton__setPassword: 'Đặt mật khẩu',
      },
      mfaSection: {
        title: 'Xác thực hai bước',
        primaryButton: 'Thêm xác thực hai bước',
        phoneCode: {
          destructiveActionTitle: 'Xóa',
          destructiveActionSubtitle: 'Xóa số điện thoại này khỏi các phương thức xác thực hai bước',
          destructiveActionLabel: 'Xóa số điện thoại',
          title__default: 'Yếu tố mặc định',
          title__setDefault: 'Đặt làm yếu tố mặc định',
          subtitle__default: 'Yếu tố này sẽ được sử dụng làm phương thức xác thực hai bước mặc định khi đăng nhập.',
          subtitle__setDefault:
            'Đặt yếu tố này làm yếu tố mặc định để sử dụng nó làm phương thức xác thực hai bước mặc định khi đăng nhập.',
          actionLabel__setDefault: 'Đặt làm mặc định',
        },
        backupCodes: {
          headerTitle: 'Mã sao lưu',
          title__regenerate: 'Tạo lại mã sao lưu',
          subtitle__regenerate:
            'Nhận một bộ mã sao lưu an toàn mới. Các mã sao lưu trước đó sẽ bị xóa và không thể sử dụng được.',
          actionLabel__regenerate: 'Tạo lại mã',
        },
        totp: {
          headerTitle: 'Ứng dụng xác thực',
          title: 'Yếu tố mặc định',
          subtitle: 'Yếu tố này sẽ được sử dụng làm phương thức xác thực hai bước mặc định khi đăng nhập.',
          destructiveActionTitle: 'Xóa',
          destructiveActionSubtitle: 'Xóa ứng dụng xác thực khỏi các phương thức xác thực hai bước',
          destructiveActionLabel: 'Xóa ứng dụng xác thực',
        },
      },
      activeDevicesSection: {
        title: 'Thiết bị hoạt động',
        primaryButton: 'Thiết bị hoạt động',
        detailsTitle: 'Thiết bị hiện tại',
        detailsSubtitle: 'Đây là thiết bị bạn đang sử dụng hiện tại',
        destructiveActionTitle: 'Đăng xuất',
        destructiveActionSubtitle: 'Đăng xuất khỏi tài khoản trên thiết bị này',
        destructiveAction: 'Đăng xuất khỏi thiết bị',
      },
      web3WalletsSection: {
        title: 'Ví Web3',
        primaryButton: 'Ví Web3',
        destructiveActionTitle: 'Xóa',
        destructiveActionSubtitle: 'Xóa ví Web3 này khỏi tài khoản của bạn',
        destructiveAction: 'Xóa ví',
      },
      dangerSection: {
        title: 'Nguy hiểm',
        deleteAccountButton: 'Xóa Tài khoản',
        deleteAccountTitle: 'Xóa Tài khoản',
        deleteAccountDescription: 'Xóa tài khoản của bạn và tất cả dữ liệu liên quan',
      },
    },
    profilePage: {
      title: 'Cập nhật hồ sơ',
      imageFormTitle: 'Hình ảnh hồ sơ',
      imageFormSubtitle: 'Tải ảnh lên',
      imageFormDestructiveActionSubtitle: 'Xóa ảnh',
      fileDropAreaTitle: 'Kéo và thả tệp vào đây, hoặc...',
      fileDropAreaAction: 'Chọn tệp',
      fileDropAreaHint: 'Tải lên ảnh JPG, PNG, GIF, hoặc WEBP có dung lượng nhỏ hơn 10 MB',
      readonly: 'Thông tin hồ sơ của bạn đã được cung cấp bởi kết nối doanh nghiệp và không thể chỉnh sửa.',
      successMessage: 'Hồ sơ của bạn đã được cập nhật.',
    },
    usernamePage: {
      title: 'Cập nhật tên người dùng',
      successMessage: 'Tên người dùng của bạn đã được cập nhật.',
    },
    emailAddressPage: {
      title: 'Thêm địa chỉ email',
      emailCode: {
        formHint: 'Một email chứa mã xác minh sẽ được gửi đến địa chỉ email này.',
        formTitle: 'Mã xác minh',
        formSubtitle: 'Nhập mã xác minh được gửi đến {{identifier}}',
        resendButton: 'Không nhận được mã? Gửi lại',
        successMessage: 'Email {{identifier}} đã được thêm vào tài khoản của bạn.',
      },
      emailLink: {
        formHint: 'Một email chứa liên kết xác minh sẽ được gửi đến địa chỉ email này.',
        formTitle: 'Liên kết xác minh',
        formSubtitle: 'Nhấp vào liên kết xác minh trong email được gửi đến {{identifier}}',
        resendButton: 'Không nhận được liên kết? Gửi lại',
        successMessage: 'Email {{identifier}} đã được thêm vào tài khoản của bạn.',
      },
      removeResource: {
        title: 'Xóa địa chỉ email',
        messageLine1: '{{identifier}} sẽ bị xóa khỏi tài khoản này.',
        messageLine2: 'Bạn sẽ không thể đăng nhập bằng địa chỉ email này nữa.',
        successMessage: '{{emailAddress}} đã được xóa khỏi tài khoản của bạn.',
      },
    },
    phoneNumberPage: {
      title: 'Thêm số điện thoại',
      successMessage: '{{identifier}} đã được thêm vào tài khoản của bạn.',
      infoText: 'Một tin nhắn chứa liên kết xác minh sẽ được gửi đến số điện thoại này.',
      infoText__secondary: 'Có thể áp dụng phí tin nhắn và dữ liệu.',
      removeResource: {
        title: 'Xóa số điện thoại',
        messageLine1: '{{identifier}} sẽ bị xóa khỏi tài khoản này.',
        messageLine2: 'Bạn sẽ không thể đăng nhập bằng số điện thoại này nữa.',
        successMessage: '{{phoneNumber}} đã được xóa khỏi tài khoản của bạn.',
      },
    },
    connectedAccountPage: {
      title: 'Thêm tài khoản liên kết',
      formHint: 'Chọn một nhà cung cấp để kết nối tài khoản của bạn.',
      formHint__noAccounts: 'Không có nhà cung cấp tài khoản bên ngoài khả dụng.',
      socialButtonsBlockButton: 'Kết nối tài khoản {{provider|titleize}}',
      successMessage: 'Nhà cung cấp đã được thêm vào tài khoản của bạn',
      removeResource: {
        title: 'Xóa tài khoản liên kết',
        messageLine1: '{{identifier}} sẽ bị xóa khỏi tài khoản này.',
        messageLine2:
          'Bạn sẽ không thể sử dụng tài khoản liên kết này và bất kỳ tính năng phụ thuộc nào sẽ không còn hoạt động.',
        successMessage: '{{connectedAccount}} đã được xóa khỏi tài khoản của bạn.',
      },
    },
    web3WalletPage: {
      title: 'Thêm ví web3',
      subtitle__availableWallets: 'Chọn một ví web3 để kết nối với tài khoản của bạn.',
      subtitle__unavailableWallets: 'Không có ví web3 khả dụng.',
      successMessage: 'Ví đã được thêm vào tài khoản của bạn.',
      removeResource: {
        title: 'Xóa ví web3',
        messageLine1: '{{identifier}} sẽ bị xóa khỏi tài khoản này.',
        messageLine2: 'Bạn sẽ không thể đăng nhập bằng ví web3 này nữa.',
        successMessage: '{{web3Wallet}} đã được xóa khỏi tài khoản của bạn.',
      },
    },
    passwordPage: {
      title: 'Thiết lập mật khẩu',
      changePasswordTitle: 'Thay đổi mật khẩu',
      readonly: 'Hiện tại bạn không thể chỉnh sửa mật khẩu vì bạn chỉ có thể đăng nhập qua kết nối doanh nghiệp.',
      successMessage: 'Mật khẩu của bạn đã được thiết lập.',
      changePasswordSuccessMessage: 'Mật khẩu của bạn đã được cập nhật.',
      sessionsSignedOutSuccessMessage: 'Tất cả các thiết bị khác đã được đăng xuất.',
    },
    mfaPage: {
      title: 'Thêm xác minh hai bước',
      formHint: 'Chọn một phương pháp để thêm.',
    },
    mfaTOTPPage: {
      title: 'Thêm ứng dụng xác thực',
      verifyTitle: 'Mã xác thực',
      verifySubtitle: 'Nhập mã xác thực được tạo bởi ứng dụng xác thực của bạn',
      successMessage:
        'Xác thực hai bước đã được kích hoạt. Khi đăng nhập, bạn sẽ cần nhập mã xác thực từ ứng dụng xác thực này như một bước bổ sung.',
      authenticatorApp: {
        infoText__ableToScan:
          'Thiết lập một phương thức đăng nhập mới trong ứng dụng xác thực của bạn và quét mã QR dưới đây để liên kết nó với tài khoản của bạn.',
        infoText__unableToScan:
          'Thiết lập một phương thức đăng nhập mới trong ứng dụng xác thực và nhập Khóa được cung cấp bên dưới.',
        inputLabel__unableToScan1:
          'Đảm bảo đã kích hoạt mật khẩu dựa trên thời gian hoặc mật khẩu một lần, sau đó hoàn thành việc liên kết tài khoản của bạn.',
        inputLabel__unableToScan2:
          'Hoặc nếu ứng dụng xác thực của bạn hỗ trợ TOTP URIs, bạn cũng có thể sao chép toàn bộ URI.',
        buttonAbleToScan__nonPrimary: 'Quét mã QR thay vì đó',
        buttonUnableToScan__nonPrimary: 'Không thể quét mã QR?',
      },
      removeResource: {
        title: 'Gỡ bỏ xác thực hai bước',
        messageLine1: 'Mã xác thực từ ứng dụng xác thực này sẽ không còn được yêu cầu khi đăng nhập.',
        messageLine2: 'Tài khoản của bạn có thể không an toàn. Bạn có chắc chắn muốn tiếp tục không?',
        successMessage: 'Xác thực hai bước qua ứng dụng xác thực đã được gỡ bỏ.',
      },
    },
    mfaPhoneCodePage: {
      title: 'Thêm mã xác thực SMS',
      primaryButton__addPhoneNumber: 'Thêm số điện thoại',
      subtitle__availablePhoneNumbers: 'Chọn một số điện thoại để đăng ký xác thực hai bước bằng mã SMS.',
      subtitle__unavailablePhoneNumbers:
        'Không có số điện thoại nào khả dụng để đăng ký xác thực hai bước bằng mã SMS.',
      successMessage:
        'Xác thực hai bước bằng mã SMS đã được kích hoạt cho số điện thoại này. Khi đăng nhập, bạn sẽ cần nhập mã xác thực được gửi đến số điện thoại này như một bước bổ sung.',
      removeResource: {
        title: 'Gỡ bỏ xác thực hai bước',
        messageLine1: '{{identifier}} sẽ không còn nhận được mã xác thực khi đăng nhập.',
        messageLine2: 'Tài khoản của bạn có thể không an toàn. Bạn có chắc chắn muốn tiếp tục không?',
        successMessage: 'Xác thực hai bước bằng mã SMS đã được gỡ bỏ cho {{mfaPhoneCode}}',
      },
    },
    backupCodePage: {
      title: 'Thêm mã xác thực sao lưu',
      title__codelist: 'Các mã sao lưu',
      subtitle__codelist: 'Lưu chúng một cách an toàn và giữ chúng bí mật.',
      infoText1: 'Các mã sao lưu sẽ được kích hoạt cho tài khoản này.',
      infoText2:
        'Giữ các mã sao lưu bí mật và lưu chúng một cách an toàn. Bạn có thể tạo lại các mã sao lưu nếu bạn nghi ngờ chúng đã bị xâm phạm.',
      successSubtitle:
        'Bạn có thể sử dụng một trong các mã này để đăng nhập vào tài khoản của mình, nếu bạn mất quyền truy cập vào thiết bị xác thực của mình.',
      successMessage:
        'Mã sao lưu đã được kích hoạt. Bạn có thể sử dụng một trong các mã này để đăng nhập vào tài khoản của mình, nếu bạn mất quyền truy cập vào thiết bị xác thực của mình. Mỗi mã chỉ có thể sử dụng một lần.',
      actionLabel__copy: 'Sao chép tất cả',
      actionLabel__copied: 'Đã sao chép!',
      actionLabel__download: 'Tải xuống .txt',
      actionLabel__print: 'In',
    },
    deletePage: {
      title: 'Xóa tài khoản',
      messageLine1: 'Bạn có chắc chắn muốn xóa tài khoản của mình không?',
      messageLine2: 'Hành động này là vĩnh viễn và không thể hoàn tác.',
      confirm: 'Xóa tài khoản',
    },
  },
  userButton: {
    action__manageAccount: 'Quản lý tài khoản',
    action__signOut: 'Đăng xuất',
    action__signOutAll: 'Đăng xuất khỏi tất cả các tài khoản',
    action__addAccount: 'Thêm tài khoản',
  },
  organizationSwitcher: {
    personalWorkspace: 'Không gian Cá nhân',
    notSelected: 'Chưa chọn tổ chức',
    action__createOrganization: 'Tạo Tổ chức',
    action__manageOrganization: 'Quản lý Tổ chức',
  },
  impersonationFab: {
    title: 'Đăng nhập với tư cách {{identifier}}',
    action__signOut: 'Đăng xuất',
  },
  organizationProfile: {
    start: {
      headerTitle__members: 'Thành viên',
      headerTitle__settings: 'Cài đặt',
      headerSubtitle__members: 'Xem và quản lý thành viên tổ chức',
      headerSubtitle__settings: 'Quản lý cài đặt tổ chức',
    },
    profilePage: {
      title: 'Hồ sơ Tổ chức',
      subtitle: 'Quản lý hồ sơ tổ chức',
      successMessage: 'Tổ chức đã được cập nhật.',
      dangerSection: {
        title: 'Nguy hiểm',
        leaveOrganization: {
          title: 'Rời khỏi tổ chức',
          messageLine1:
            'Bạn có chắc chắn muốn rời khỏi tổ chức này? Bạn sẽ mất quyền truy cập vào tổ chức này và các ứng dụng của nó.',
          messageLine2: 'Hành động này là vĩnh viễn và không thể hoàn tác.',
          successMessage: 'Bạn đã rời khỏi tổ chức.',
        },
        deleteOrganization: {
          title: 'Xóa tổ chức',
          messageLine1: 'Bạn có chắc chắn muốn xóa tổ chức này không?',
          messageLine2: 'Hành động này là vĩnh viễn và không thể hoàn tác.',
          successMessage: 'Bạn đã xóa tổ chức.',
        },
      },
    },
    invitePage: {
      title: 'Mời thành viên',
      subtitle: 'Mời thành viên mới vào tổ chức này',
      successMessage: 'Mời đã được gửi thành công',
      detailsTitle__inviteFailed: 'Không thể gửi lời mời. Sửa các lỗi sau và thử lại:',
      formButtonPrimary__continue: 'Gửi lời mời',
    },
    membersPage: {
      detailsTitle__emptyRow: 'Không có thành viên để hiển thị',
      action__invite: 'Mời',
      start: {
        headerTitle__active: 'Hoạt động',
        headerTitle__invited: 'Đã mời',
      },
      activeMembersTab: {
        tableHeader__user: 'Người dùng',
        tableHeader__joined: 'Tham gia',
        tableHeader__role: 'Vai trò',
        tableHeader__actions: '',
        menuAction__remove: 'Gỡ bỏ thành viên',
      },
      invitedMembersTab: {
        tableHeader__invited: 'Đã mời',
        menuAction__revoke: 'Thu hồi lời mời',
      },
    },
  },
  createOrganization: {
    title: 'Tạo Tổ chức',
    formButtonSubmit: 'Tạo tổ chức',
    subtitle: 'Đặt hồ sơ tổ chức',
    invitePage: {
      formButtonReset: 'Bỏ qua',
    },
  },
  unstable__errors: {
    identification_deletion_failed: 'Bạn không thể xóa thông tin nhận dạng cuối cùng của bạn.',
    phone_number_exists: 'Số điện thoại này đã được sử dụng. Vui lòng thử số khác.',
    form_identifier_not_found: '',
    captcha_invalid:
      'Đăng ký không thành công do không vượt qua các xác thực bảo mật. Vui lòng làm mới trang và thử lại hoặc liên hệ hỗ trợ để được trợ giúp thêm.',
    form_password_pwned:
      'Mật khẩu này đã được phát hiện trong một cuộc tấn công và không thể sử dụng, vui lòng thử mật khẩu khác.',
    form_username_invalid_length: '',
    form_username_invalid_character: '',
    form_param_format_invalid: '',
    form_param_format_invalid__email_address: 'Địa chỉ email phải là một địa chỉ email hợp lệ',
    form_password_length_too_short: '',
    form_param_nil: '',
    form_code_incorrect: '',
    form_password_incorrect: '',
    not_allowed_access: '',
    form_identifier_exists: '',
    form_password_validation_failed: 'Mật khẩu không đúng',
    form_password_not_strong_enough: 'Mật khẩu của bạn không đủ mạnh.',
    form_password_size_in_bytes_exceeded:
      'Mật khẩu của bạn đã vượt quá số byte tối đa cho phép, vui lòng rút ngắn hoặc loại bỏ một số ký tự đặc biệt.',
    passwordComplexity: {
      sentencePrefix: 'Mật khẩu của bạn phải chứa',
      minimumLength: '{{length}} hoặc nhiều ký tự',
      maximumLength: 'ít hơn {{length}} ký tự',
      requireNumbers: 'một số',
      requireLowercase: 'một chữ cái viết thường',
      requireUppercase: 'một chữ cái viết hoa',
      requireSpecialCharacter: 'một ký tự đặc biệt',
    },
    zxcvbn: {
      notEnough: 'Mật khẩu của bạn không đủ mạnh.',
      couldBeStronger: 'Mật khẩu của bạn đủ mạnh, nhưng có thể mạnh hơn. Hãy thêm nhiều ký tự hơn.',
      goodPassword: 'Mật khẩu của bạn đáp ứng tất cả các yêu cầu cần thiết.',
      warnings: {
        straightRow: 'Các hàng phím trên bàn phím của bạn dễ đoán.',
        keyPattern: 'Mẫu bàn phím ngắn dễ đoán.',
        simpleRepeat: 'Các ký tự lặp lại như "aaa" dễ đoán.',
        extendedRepeat: 'Các mẫu ký tự lặp lại như "abcabcabc" dễ đoán.',
        sequences: 'Các chuỗi ký tự phổ biến như "abc" dễ đoán.',
        recentYears: 'Các năm gần đây dễ đoán.',
        dates: 'Ngày tháng dễ đoán.',
        topTen: 'Đây là một mật khẩu được sử dụng rất nhiều.',
        topHundred: 'Đây là một mật khẩu được sử dụng thường xuyên.',
        common: 'Đây là một mật khẩu phổ biến.',
        similarToCommon: 'Đây giống với một mật khẩu phổ biến.',
        wordByItself: 'Một từ đơn dễ đoán.',
        namesByThemselves: 'Các tên riêng hoặc họ riêng dễ đoán.',
        commonNames: 'Các tên riêng và họ phổ biến dễ đoán.',
        userInputs: 'Không nên có bất kỳ dữ liệu cá nhân hoặc liên quan đến trang web.',
        pwned: 'Mật khẩu của bạn đã bị rò rỉ qua một cuộc tấn công dữ liệu trên Internet.',
      },
      suggestions: {
        l33t: "Tránh việc thay thế chữ cái dễ đoán bằng các ký tự như '@' thay cho 'a'.",
        reverseWords: 'Tránh việc viết ngược các từ thông thường.',
        allUppercase: 'Viết hoa một số ký tự, nhưng không phải tất cả.',
        capitalization: 'Viết hoa nhiều hơn chỉ chữ cái đầu tiên.',
        dates: 'Tránh sử dụng ngày tháng năm liên quan đến bạn.',
        recentYears: 'Tránh các năm gần đây.',
        associatedYears: 'Tránh các năm liên quan đến bạn.',
        sequences: 'Tránh các chuỗi ký tự thông thường.',
        repeated: 'Tránh việc lặp lại từ và ký tự.',
        longerKeyboardPattern: 'Sử dụng các mẫu bàn phím dài hơn và thay đổi hướng gõ nhiều lần.',
        anotherWord: 'Thêm nhiều từ ít phổ biến hơn.',
        useWords: 'Sử dụng nhiều từ, nhưng tránh các cụm từ thông thường.',
        noNeed: 'Bạn có thể tạo mật khẩu mạnh mà không cần sử dụng ký tự đặc biệt, số hoặc chữ cái viết hoa.',
        pwned: 'Nếu bạn sử dụng mật khẩu này ở những nơi khác, bạn nên thay đổi nó.',
      },
    },
  },
  dates: {
    previous6Days: "Vào {{ date | weekday('vi-VN','long') }} trước đó lúc {{ date | timeString('vi-VN') }}",
    lastDay: "Hôm qua lúc {{ date | timeString('vi-VN') }}",
    sameDay: "Hôm nay lúc {{ date | timeString('vi-VN') }}",
    nextDay: "Ngày mai lúc {{ date | timeString('vi-VN') }}",
    next6Days: "Vào {{ date | weekday('vi-VN','long') }} tới lúc {{ date | timeString('vi-VN') }}",
    numeric: "{{ date | numeric('vi-VN') }}",
  },
} as const;
