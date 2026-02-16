"use client";

import { useEffect, useState } from "react";
import type { AccountAccess, UserRow } from "@/data/settings-users";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { Select } from "@/components/ui/Select";
import {
  ArrowsUpDownIcon,
  InformationCircleIcon,
} from "@/components/ui/icons";

const ROLE_OPTIONS = [
  { value: "User", label: "User" },
  { value: "Admin", label: "Admin" },
  { value: "No role", label: "No role" },
];

const STATUS_OPTIONS = [
  { value: "Enabled", label: "Enabled" },
  { value: "Disabled", label: "Disabled" },
];

type ManageUserAccessModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: UserRow | null;
  onUpdate?: (userId: string, updates: { email: string; role: string; accounts: AccountAccess[] }) => void;
};

export function ManageUserAccessModal({
  open,
  onOpenChange,
  user,
  onUpdate,
}: ManageUserAccessModalProps) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [accounts, setAccounts] = useState<AccountAccess[]>([]);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setRole(user.role);
      setAccounts(user.accounts ?? [{ name: "Sales team", status: "Enabled" }]);
    }
  }, [user]);

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleUpdate = () => {
    if (user && onUpdate) {
      onUpdate(user.id, { email, role, accounts });
    }
    handleClose();
  };

  const handleAccountStatusChange = (index: number, status: "Enabled" | "Disabled") => {
    setAccounts((prev) =>
      prev.map((acc, i) => (i === index ? { ...acc, status } : acc))
    );
  };

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Manage user"
      footer={
        <>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdate}>Update user</Button>
        </>
      }
    >
      {user && (
      <div className="flex flex-col gap-[16px]">
        <Input
          id="manage-user-email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Select
          id="manage-user-role"
          label="Role"
          value={role}
          onValueChange={setRole}
          options={ROLE_OPTIONS}
          placeholder="Select role"
        />

        <div>
          <p className="text-[12px] font-bold text-neutral-600 mb-[8px]">
            Account access
          </p>
          <div className="border border-grey-100 rounded-[5px] overflow-hidden">
            <div className="grid grid-cols-[1fr_minmax(120px,auto)]">
              <div className="bg-grey-50 h-[40px] flex items-center gap-[8px] px-[10px] border-b border-r border-grey-100">
                <p className="text-[14px] font-bold text-neutral-600">Accounts</p>
                <ArrowsUpDownIcon className="size-[16px] text-neutral-600 shrink-0" />
              </div>
              <div className="bg-grey-50 h-[40px] flex items-center px-[10px] border-b border-grey-100">
                <p className="text-[14px] font-bold text-neutral-600">Status</p>
              </div>
              {accounts.map((acc, index) => (
                <div key={`${acc.name}-${index}`} className="contents">
                  <div className="h-[40px] flex items-center px-[10px] border-b border-r border-grey-100 bg-white">
                    <p className="text-[14px] text-neutral-600">{acc.name}</p>
                  </div>
                  <div className="h-[40px] flex items-center px-[10px] border-b border-grey-100 bg-white">
                    <Select
                      value={acc.status}
                      onValueChange={(v) =>
                        handleAccountStatusChange(
                          index,
                          v as "Enabled" | "Disabled",
                        )
                      }
                      options={STATUS_OPTIONS}
                      size="sm"
                      className="min-w-[100px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          href="#"
          className="flex items-center gap-[4px] text-[14px] text-primary-hover underline hover:text-primary w-fit"
          onClick={(e) => e.preventDefault()}
        >
          Manage permission settings
          <InformationCircleIcon className="size-[16px] shrink-0" />
        </a>
      </div>
      )}
    </Modal>
  );
}
